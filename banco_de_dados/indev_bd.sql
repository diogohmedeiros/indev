



DROP DATABASE IF EXISTS indev;

CREATE DATABASE indev CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;

USE indev;

CREATE TABLE empresas(

	id_empresa INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tipo_de_usuario INTEGER NOT NULL,
	foto_de_perfil_empresa LONGTEXT,
	nome_empresa VARCHAR(30) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	cnpj VARCHAR(25) NOT NULL,
	email VARCHAR(30) NOT NULL,
	senha VARCHAR(100) NOT NULL
);

CREATE TABLE vagas(

	id_vaga INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_empresa INTEGER NOT NULL,
	cidade VARCHAR(30) NOT NULL,
	cargo VARCHAR(30) NOT NULL,
	salario DECIMAL(5,2),
	descricao VARCHAR(400),
	expediente VARCHAR(100),
	data_de_publicacao DATE NOT NULL,
	data_encerra_vaga DATE NOT NULL,
	email_de_contato VARCHAR(30) NOT NULL,
	
	CONSTRAINT fk_vaga FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE publicacoes(

	id_publicacao INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_empresa INTEGER NOT NULL,
	data_de_publicacao DATE NOT NULL,
	data_de_alteracao DATE,
	nome_publicador VARCHAR(50) NOT NULL,
	email_publicador VARCHAR(30),
	telefone_publicador VARCHAR(20),
	email_de_contato VARCHAR(30),
	coteudo VARCHAR(400),
	
	CONSTRAINT fk_publicacao FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE enderecos_empresa(

	id_empresa_emp INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_empresa INTEGER NOT NULL,
	nome_pais VARCHAR(25) NOT NULL,
	nome_estado VARCHAR(25) NOT NULL,
	nome_cidade VARCHAR(25) NOT NULL,
	nome_bairro VARCHAR(25) NOT NULL,
	nome_rua VARCHAR(30) NOT NULL,
	numero VARCHAR(5) NOT NULL,
	complemento VARCHAR(30) NOT NULL,
	
	CONSTRAINT fk_end_emp FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE usuarios(

	id_usuario INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tipo_de_usuario INTEGER NOT NULL,
	cnpj_empresa_atual VARCHAR(25),
	status_empresa_atual BOOLEAN NOT NULL,
	foto_usuario LONGTEXT,
	nome_usuario VARCHAR(50) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	cpf VARCHAR(15),
	rg VARCHAR(20),
	cep VARCHAR(20),
	formacao VARCHAR(100),
	estado_civil VARCHAR(25),
	email VARCHAR(30) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	status BOOLEAN NOT NULL
);


CREATE TABLE curriculos(

	id_curriculo INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_usuario INTEGER NOT NULL,
	documento LONGBLOB NOT NULL,
	categoria VARCHAR(25) NOT NULL,
	
	CONSTRAINT fk_curriculo FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE relac_curriculo_emp(

	id_curriculo INTEGER NOT NULL,
	id_empresa INTEGER NOT NULL,
	
	CONSTRAINT fk_relac_curriculo FOREIGN KEY (id_curriculo) REFERENCES curriculos(id_curriculo) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_relac_empresa FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);













