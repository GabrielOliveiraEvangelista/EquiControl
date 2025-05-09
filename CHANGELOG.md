- Versionamento do projeto \*

  MAJOR.MINOR.PATCH
  Ex: 1. 4. 2

* MAJOR: mudanças que quebram compatibilidade com versões anteriores
* MINOR: novas funcionalidades, sem quebrar compatibilidade
* PATCH: correções de bugs e pequenas melhorias internas

Exemplo:
1.0.0: primeira versão estável
1.1.0: adição de um novo recurso
1.1.1: correção de um bug no recurso

! Log's de versões Backend:

# [1.0.0] - 09/05/2024 - Versão inicial estável do projeto

1 - Descobrir como sera feito o schemas global do zod, apos isso ajustar os arquivos que faz validação com if nas variaveis de ambiente
2- Segundo o meu entendimento o zod tem que ficar, na sua maioria, no front, logo as validações de ABQM_USURIO e ABQM_SENHA deveram ser migrada para la
