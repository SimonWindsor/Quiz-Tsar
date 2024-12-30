

async function trivia (numQuestions, difficulty, category, type) {
  const APIrequest = `
    https://opentdb.com/api.php?amount=${numQuestions}&difficulty=${difficulty}&category=${category}&type=${type}
  `
  try {
    const response = await fetch(APIrequest);
    const jsonResponse =  await response.json();
    console.log(response);
    console.log(jsonResponse);
    if(jsonResponse.response_code === 0)
      return jsonResponse.results;
    else return;
  } catch (error) {
    console.error(error);
    return error;
  }
}

trivia(10, '', '', '');