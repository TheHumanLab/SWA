/*
=========================================
CONDITION DETECTION
=========================================
*/

export function detectConditions(scores){

    const findings = [];

    if(scores.visibility < 60){
        findings.push(
            CONDITIONS.VISIBILITY_DEGRADATION
        );
    }

    if(scores.dependency < 60){
        findings.push(
            CONDITIONS.DEPENDENCY_CONCENTRATION
        );
    }

    if(scores.role < 60){
        findings.push(
            CONDITIONS.ACCOUNTABILITY_DRIFT
        );
    }

    if(scores.movement < 60){
        findings.push(
            CONDITIONS.EXECUTION_FRAGMENTATION
        );
    }

    if(scores.interaction < 60){
        findings.push(
            CONDITIONS.CONTINUITY_RISK
        );
    }

    return findings;
}

/*
=========================================
INTERACTION DETECTION
=========================================
*/

export function detectInteractions(scores){

    const interactions = [];

    if(
        scores.visibility < 60 &&
        scores.movement < 60
    ){

        interactions.push({

            title:
            "Visibility Driven Coordination Strain",

            severity:
            "High",

            narrative:
            "Execution continuity appears constrained by deteriorating informational movement across operational boundaries."

        });

    }

    if(
        scores.role < 60 &&
        scores.dependency < 60
    ){

        interactions.push({

            title:
            "Dependency Reinforced Accountability Drift",

            severity:
            "High",

            narrative:
            "Operational continuity appears increasingly reliant upon key individuals while ownership stability simultaneously weakens."

        });

    }

    if(
        scores.dependency < 60 &&
        scores.interaction < 60
    ){

        interactions.push({

            title:
            "Adaptive Capacity Weakness",

            severity:
            "High",

            narrative:
            "Structural adaptation mechanisms appear insufficient relative to operational complexity demands."

        });

    }

    if(
        scores.movement < 60 &&
        scores.role < 60
    ){

        interactions.push({

            title:
            "Execution Governance Instability",

            severity:
            "Medium",

            narrative:
            "Execution continuity appears increasingly vulnerable as operational movement instability combines with weakened ownership consistency."

        });

    }

    return interactions;

}

/*
=========================================
STRUCTURAL RISK
=========================================
*/

export function calculateStructuralRisk(sii){

    if(sii >= 85){

        return {
            level:"Low",
            classification:"Structurally Stable"
        };

    }

    if(sii >= 70){

        return {
            level:"Moderate",
            classification:"Operationally Sustainable"
        };

    }

    if(sii >= 55){

        return {
            level:"Elevated",
            classification:"Emerging Structural Friction"
        };

    }

    if(sii >= 40){

        return {
            level:"High",
            classification:"Structural Instability"
        };

    }

    return {
        level:"Critical",
        classification:"Critical Structural Exposure"
    };

}

/*
=========================================
OBSERVATION SYNTHESIS
=========================================
*/

export function synthesiseObservations(
    observations
){

    const synthesis = [];

    Object.values(
        observations
    ).forEach(value => {

        if(
            value &&
            value.trim().length > 40
        ){

            synthesis.push(
                value.trim()
            );

        }

    });

    return synthesis;

}

/*
=========================================
EXECUTIVE NARRATIVE
=========================================
*/

export function buildExecutiveNarrative(
    sii,
    conditions,
    interactions
){

    let narrative = '';

    if(sii >= 85){

        narrative =
        'Operational architecture currently demonstrates strong structural continuity across major execution systems.';

    }
    else if(sii >= 70){

        narrative =
        'Core operational systems remain broadly sustainable, although emerging areas of structural strain are becoming visible.';

    }
    else if(sii >= 55){

        narrative =
        'Multiple structural friction points appear to be influencing execution continuity, coordination behaviour and operational resilience.';

    }
    else{

        narrative =
        'Structural instability appears sufficiently developed to create meaningful continuity risk across operational systems.';

    }

    if(conditions.length > 0){

        narrative +=
        ' Primary structural conditions indicate emerging weaknesses in operational architecture requiring ongoing observation.';

    }

    if(interactions.length > 0){

        narrative +=
        ' Interaction analysis suggests multiple structural conditions may be reinforcing one another rather than occurring independently.';

    }

    return narrative;

}
