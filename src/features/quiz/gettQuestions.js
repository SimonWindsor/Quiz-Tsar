let q;

async function getQuestions() {
  try {
    const request = await fetch('https://opentdb.com/api.php?amount=10');
    const response =  await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function setQ() {
  q = await getQuestions();
  console.log(q); // this prints the questions just fine
}

setQ();
console.log(q); // this says undefined


