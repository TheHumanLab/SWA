/*
=========================================
KJ REPORTING ENGINE
=========================================

Purpose:

Transform structural findings into
executive-grade intelligence reports.

Inputs:

scores
conditions
interactions
risk
observations
narrative

Outputs:

Executive Report Object

=========================================
*/

export function buildExecutiveReport({

scores,
sii,
risk,
conditions,
interactions,
observations,
narrative

}){

return {

metadata:{

assessment:"KJ-SWA",

generated:new Date()
.toISOString()

},

executiveSummary:
buildExecutiveSummary(
sii,
risk,
conditions,
interactions
),

structuralIntegrityIndex:sii,

risk,

dimensionAnalysis:
buildDimensionAnalysis(
scores
),

conditions,

interactions,

observations,

narrative

};

}
