interface IPontuacoesRepository {
  countPontuacoes(users_id: number): Promise<number>;
}

export { IPontuacoesRepository };
