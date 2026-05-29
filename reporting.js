function adjustedScore(question,value){

if(question.reverse){

return 6-value;

}

return value;

}

function calculateDimension(sectionId,responses){

const section=
sections.find(
s=>s.id===sectionId
);

let total=0;

section.questions.forEach(q=>{

total+=adjustedScore(
q,
responses[q.id]
);

});

const max=
section.questions.length*5;

return Math.round(
(total/max)*100
);

}

function calculateSII(scores){

const values=
Object.values(scores);

const total=
values.reduce(
(a,b)=>a+b,
0
);

return Math.round(
total/values.length
);

}
