function status(request, response) {
  response.status(200).json({ chave: "É o melhor dev que vc já conheceu" });
}

export default status;
