interface IPontuacoesRepository {
  countPontuacoes(users_id: number): Promise<number>;
  countPontuacoesByUserAndByEstabelecimento(
    user_id: number,
    estabelecimento_id: number
  ): Promise<number>;
}

export { IPontuacoesRepository };
