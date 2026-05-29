/*
=========================================
KJ-SWA
APPLICATION CONTROLLER
=========================================
*/

import { KJSWA } from "./questions.js";

import {
    calculateDimension,
    calculateSII
} from "./scoring.js";

import {
    detectConditions,
    detectInteractions,
    calculateStructuralRisk,
    buildExecutiveNarrative,
    synthesiseObservations
} from "./diagnostics.js";

import {
    buildExecutiveReport,
    renderReport
} from "./reporting.js";

/*
=========================================
INITIALISE
=========================================
*/

document.addEventListener(
    "DOMContentLoaded",
    initialiseAssessment
);

function initialiseAssessment() {

    renderDiagnostic();

    const button =
        document.getElementById(
            "generateReport"
        );

    if (button) {

        button.addEventListener(
            "click",
            generateAssessment
        );

    }

}

/*
=========================================
RENDER DIAGNOSTIC
=========================================
*/

function renderDiagnostic() {

    const container =
        document.getElementById(
            "questions"
        );

    if (!container) return;

    container.innerHTML = "";

    KJSWA.dimensions.forEach(
        section => {

            const sectionEl =
                document.createElement(
                    "section"
                );

            sectionEl.className =
                "diagnostic-section";

            sectionEl.innerHTML = `
                <div class="section-header">
                    <h2>${section.title}</h2>
                </div>
            `;

            section.questions.forEach(
                question => {

                    const card =
                        document.createElement(
                            "div"
                        );

                    card.className =
                        "question-card";

                    card.innerHTML = `

                        <div class="question-number">
                            Q${question.id}
                        </div>

                        <div class="question-text">
                            ${question.text}
                        </div>

                        <div class="response-scale">

                            ${renderScale(
                                question.id
                            )}

                        </div>

                    `;

                    sectionEl.appendChild(
                        card
                    );

                }
            );

            const observation =
                document.createElement(
                    "div"
                );

            observation.className =
                "observation-card";

            observation.innerHTML = `

                <h3>
                    Structural Observation
                </h3>

                <p>
                    ${section.observationPrompt}
                </p>

                <textarea
                    id="obs-${section.id}"
                    placeholder="Enter structural observation..."
                ></textarea>

            `;

            sectionEl.appendChild(
                observation
            );

            container.appendChild(
                sectionEl
            );

        }
    );

}

/*
=========================================
RESPONSE SCALE
=========================================
*/

function renderScale(questionId) {

    let html = "";

    for (
        let value = 1;
        value <= 5;
        value++
    ) {

        html += `

        <label class="scale-option">

            <input
                type="radio"
                name="q${questionId}"
                value="${value}"
            >

            <span>${value}</span>

        </label>

        `;

    }

    return html;

}

/*
=========================================
VALIDATION
=========================================
*/

function validateResponses() {

    const missing = [];

    KJSWA.dimensions.forEach(
        section => {

            section.questions.forEach(
                question => {

                    const selected =
                        document.querySelector(
                            `input[name="q${question.id}"]:checked`
                        );

                    if (!selected) {

                        missing.push(
                            question.id
                        );

                    }

                }
            );

        }
    );

    return missing;

}

/*
=========================================
COLLECT RESPONSES
=========================================
*/

function collectResponses() {

    const responses = {};

    KJSWA.dimensions.forEach(
        section => {

            section.questions.forEach(
                question => {

                    const selected =
                        document.querySelector(
                            `input[name="q${question.id}"]:checked`
                        );

                    responses[
                        question.id
                    ] = parseInt(
                        selected.value
                    );

                }
            );

        }
    );

    return responses;

}

/*
=========================================
COLLECT OBSERVATIONS
=========================================
*/

function collectObservations() {

    const observations = {};

    KJSWA.dimensions.forEach(
        section => {

            observations[
                section.id
            ] =
            document.getElementById(
                `obs-${section.id}`
            )?.value || "";

        }
    );

    return observations;

}

/*
=========================================
CALCULATE SCORES
=========================================
*/

function calculateScores(
    responses
) {

    return {

        movement:
        calculateDimension(
            "movement",
            responses
        ),

        role:
        calculateDimension(
            "role",
            responses
        ),

        visibility:
        calculateDimension(
            "visibility",
            responses
        ),

        dependency:
        calculateDimension(
            "dependency",
            responses
        ),

        interaction:
        calculateDimension(
            "interaction",
            responses
        )

    };

}

/*
=========================================
ASSESSMENT PIPELINE
=========================================
*/

function generateAssessment() {

    const missing =
        validateResponses();

    if (
        missing.length > 0
    ) {

        alert(
            `Please complete all questions before generating the report. Missing responses: ${missing.length}`
        );

        return;

    }

    const responses =
        collectResponses();

    const observations =
        collectObservations();

    const scores =
        calculateScores(
            responses
        );

    const sii =
        calculateSII(
            scores
        );

    const conditions =
        detectConditions(
            scores
        );

    const interactions =
        detectInteractions(
            scores
        );

    const risk =
        calculateStructuralRisk(
            sii
        );

    const observationSummary =
        synthesiseObservations(
            observations
        );

    const narrative =
        buildExecutiveNarrative(
            sii,
            conditions,
            interactions
        );

    const report =
        buildExecutiveReport({

            scores,

            sii,

            risk,

            conditions,

            interactions,

            observations:
            observationSummary,

            narrative

        });

    renderAssessment(
        report
    );

}

/*
=========================================
RENDER OUTPUT
=========================================
*/

function renderAssessment(
    report
) {

    const reportSection =
        document.getElementById(
            "report"
        );

    reportSection.classList
        .remove(
            "hidden"
        );

    renderReport(
        report
    );

    reportSection.scrollIntoView({

        behavior: "smooth"

    });

}
