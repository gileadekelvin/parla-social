## Parla Social

Este site tem o objetivo de apresentar as redes sociais dos parlamentares do Congresso Brasileiro e visualizar informações sobre o comportamento desses parlamentares nas redes.

### Como contribuir no desenvolvimento

O ambiente de desenvolvimento pode ser configurado usando docker, o que irá facilitar o processo de desenvolvimento e contribuição.

#### Instale o que for necessário

1. Instale o [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce) e o [docker-compose](https://docs.docker.com/compose/install/).

#### Execute o projeto no ambiente de desenvolvimento

1. Faça uma cópia do arquivo `variables.env.sample` e renomeie para `variables.env`. Também preencha neste arquivo o valor das variáveis de ambiente com aquelas adequadas para o ambiente de desenvolvimento.

2. É preciso ter um Banco MongoDB sendo executado com os dados de parlamentares já disponíveis para que a aplicação funcione. Instruções sobre como iniciar e configurar um banco local usando mongoDB está presente no readme contido no diretório `db` deste repositório.

    2.1 Uma das variáveis de ambiente que devem ser preenchidas é a da URL de conexão com o banco de dados. Esta URL tem o seguinte formato:
    ```
    mongodb://<user>:<password>@<host>:<port>/<db-name>
    ```
    No caso do Banco Local que pode ser levantando seguindo o readme do diretório `db`, a URL seria:
    mongodb://admin:secret@mongo:27017/admin

3. Uma vez que o arquivo de variáveis e o banco estiverem configurados execute o seguinte comando:

```
docker-compose up --build
```

A API estará disponível em **`localhost:5000/api`**

Caso seu banco mongo não seja local é possível ainda executar a aplicação sem precisar da rede de comunicação entre o container mongo e o container da aplicação. Para isto execute:

```
docker-compose -f docker-compose-alt.yml up --build
```

#### Comandos úteis

Pare o container atual rodando a aplicação e apague os volumes
```
docker-compose down --volumes
```

Dê build nas imagens no momento de levantar o container
```
docker-compose up --build
```

Remova containers
```
docker-compose rm <container_id>
```
