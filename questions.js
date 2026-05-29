export const KJSWA = {

id: "KJ-SWA",

name: "Structural Workforce Audit",

version: "1.0.0",

description:
"Evaluates how structural conditions shape operational behaviour throughout the organisation.",

dimensions: [

{
id: "movement",
title: "Operational Movement",

observationPrompt:
"What recurring operational behaviour most frequently disrupts execution continuity, workflow movement, or sustainable coordination across the organisation?",

questions: [

{
id: 1,
reverse: false,
weight: 1,
text: "Operational work moves consistently through teams and departments without repeated disruption."
},

{
id: 2,
reverse: false,
weight: 1,
text: "Workflow movement remains stable during periods of increased operational demand."
},

{
id: 3,
reverse: true,
weight: 1,
text: "Operational coordination relies heavily on repeated manual follow-up."
},

{
id: 4,
reverse: true,
weight: 1,
text: "Operational routing changes frequently outside intended processes."
},

{
id: 5,
reverse: false,
weight: 1,
text: "Cross-functional coordination remains stable during operational pressure."
},

{
id: 6,
reverse: true,
weight: 1,
text: "Operational movement becomes increasingly reactive during periods of strain."
}

]

},

{
id: "role",
title: "Role & Execution Stability",

observationPrompt:
"What recurring operational condition most frequently destabilises accountability, ownership continuity, or sustainable execution behaviour?",

questions: [

{
id: 7,
reverse: false,
weight: 1,
text: "Operational ownership remains consistent across teams and departments."
},

{
id: 8,
reverse: true,
weight: 1,
text: "Responsibility movement frequently shifts during operational pressure."
},

{
id: 9,
reverse: true,
weight: 1,
text: "Execution reliability depends heavily on specific individuals."
},

{
id: 10,
reverse: true,
weight: 1,
text: "Accountability behaviour weakens during periods of operational strain."
},

{
id: 11,
reverse: false,
weight: 1,
text: "Operational continuity remains stable when key individuals are unavailable."
},

{
id: 12,
reverse: true,
weight: 1,
text: "Responsibility boundaries become increasingly inconsistent as complexity expands."
}

]

},

{
id: "visibility",
title: "Visibility & Informational Movement",

observationPrompt:
"What operational condition most frequently limits reliable visibility into execution movement, coordination behaviour, or operational awareness?",

questions: [

{
id: 13,
reverse: false,
weight: 1,
text: "Teams receive reliable operational information required to maintain execution continuity."
},

{
id: 14,
reverse: true,
weight: 1,
text: "Operational visibility weakens during periods of increased demand."
},

{
id: 15,
reverse: true,
weight: 1,
text: "Departments frequently operate with inconsistent operational interpretation."
},

{
id: 16,
reverse: true,
weight: 1,
text: "Reporting movement becomes fragmented during operational strain."
},

{
id: 17,
reverse: false,
weight: 1,
text: "Operational reporting reflects lived execution conditions accurately."
},

{
id: 18,
reverse: false,
weight: 1,
text: "Informational movement supports sustainable operational coordination across the organisation."
}

]

},

{
id: "dependency",
title: "Dependency Load & Operational Pressure",

observationPrompt:
"What recurring dependency or operational strain most significantly affects sustainable execution continuity across the organisation?",

questions: [

{
id: 19,
reverse: true,
weight: 1,
text: "Operational continuity depends heavily on specific individuals or teams."
},

{
id: 20,
reverse: true,
weight: 1,
text: "Work regularly requires manual intervention to maintain continuity."
},

{
id: 21,
reverse: false,
weight: 1,
text: "Operational systems remain stable during increased execution demand."
},

{
id: 22,
reverse: true,
weight: 1,
text: "Urgency regularly replaces stable operational prioritisation behaviour."
},

{
id: 23,
reverse: true,
weight: 1,
text: "Operational strain accumulates faster than systems adapt structurally."
},

{
id: 24,
reverse: false,
weight: 1,
text: "Structural systems absorb complexity sustainably without excessive manual coordination."
}

]

},

{
id: "interaction",
title: "Structural System Interaction",

observationPrompt:
"What recurring organisational behaviour most clearly signals increasing operational strain or structural instability throughout the workforce environment?",

questions: [

{
id: 25,
reverse: true,
weight: 1,
text: "Operational movement across the organisation depends more on individual effort than stable structural systems."
},

{
id: 26,
reverse: false,
weight: 1,
text: "Operational systems remain structurally stable during periods of rapid organisational demand."
},

{
id: 27,
reverse: true,
weight: 1,
text: "Work frequently reroutes informally to maintain execution continuity."
},

{
id: 28,
reverse: false,
weight: 1,
text: "Organisational systems continue functioning effectively without excessive escalation behaviour."
},

{
id: 29,
reverse: true,
weight: 1,
text: "Operational continuity weakens noticeably during periods of increased organisational pressure."
},

{
id: 30,
reverse: false,
weight: 1,
text: "The organisation currently operates through structurally sustainable operational systems."
}

]

}

]

};
