function status(request, response) {
  response.status(200).json({ chave: "É o melhor dev da Castanheira" });
}

export default status;
