
DROP DATABASE IF EXISTS indev;

CREATE DATABASE indev CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;

USE indev;

CREATE TABLE empresas(

	id_empresa INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tipo_de_usuario INTEGER NOT NULL,
	foto_de_perfil_empresa LONGTEXT,
	nome_empresa VARCHAR(30) NOT NULL,
	telefone VARCHAR(20) NOT NULL UNIQUE,
	cnpj VARCHAR(25) NOT NULL UNIQUE,
	email VARCHAR(30) NOT NULL UNIQUE,
	senha VARCHAR(100) NOT NULL
);

CREATE TABLE vagas(

	id_vaga INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_empresa INTEGER NOT NULL,
	cidade VARCHAR(30) NOT NULL,
	cargo VARCHAR(30) NOT NULL,
	salario DECIMAL(9,2),
	descricao VARCHAR(400),
	expediente VARCHAR(100),
	data_de_publicacao DATE NOT NULL,
	quantidade_de_vagas integer,
	data_encerra_vaga DATE NOT NULL,
	email_de_contato VARCHAR(30) NOT NULL,
<<<<<<< HEAD
	status_vaga BOOLEAN NOT NULL,
=======
	status_vaga boolean NOT NULL,
>>>>>>> eb36c08670acc3344d3d4420aeb3de70319301d3
	requisitos VARCHAR(400),
	
	CONSTRAINT fk_vaga FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE beneficios(

	id_beneficio INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(25) NOT NULL
);

CREATE TABLE relac_benef_vaga(

	id_vaga INTEGER NOT NULL,
	id_beneficio INTEGER NOT NULL,
	
	CONSTRAINT fk_vaga02 FOREIGN KEY (id_vaga) REFERENCES vagas (id_vaga) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_beneficio FOREIGN KEY (id_beneficio) REFERENCES beneficios (id_beneficio) ON DELETE CASCADE ON UPDATE CASCADE
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
	cep VARCHAR(20),
	nome_pais VARCHAR(25) NOT NULL,
	nome_estado VARCHAR(25) NOT NULL,
	nome_cidade VARCHAR(25) NOT NULL,
	nome_bairro VARCHAR(25) NOT NULL,
	nome_rua VARCHAR(30) NOT NULL,
	numero VARCHAR(5) NOT NULL,
	complemento VARCHAR(30),
	
	CONSTRAINT fk_end_emp FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE usuarios(

	id_usuario INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tipo_de_usuario INTEGER NOT NULL,
	id_empresa INTEGER,
	status_empresa_atual BOOLEAN NOT NULL,
	foto_usuario LONGTEXT,
	nome_usuario VARCHAR(50) NOT NULL,
	telefone VARCHAR(25) NOT NULL UNIQUE,
	cpf VARCHAR(15) UNIQUE,
	rg VARCHAR(20),
	formacao VARCHAR(100),
	estado_civil VARCHAR(25),
	email VARCHAR(30) NOT NULL UNIQUE,
	senha VARCHAR(100) NOT NULL,
	status BOOLEAN NOT NULL,
	
	CONSTRAINT fk_empresa FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
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

CREATE TABLE enderecos_usuario(
	id_ender_user INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_usuario INTEGER NOT NULL,
	cep VARCHAR(20),
	nome_pais VARCHAR(25) NOT NULL,
	nome_estado VARCHAR(25) NOT NULL,
	nome_cidade VARCHAR(25) NOT NULL,
	nome_bairro VARCHAR(25) NOT NULL,
	nome_rua VARCHAR(30) NOT NULL,
	numero VARCHAR(5) NOT NULL,
	complemento VARCHAR(10),
	
	CONSTRAINT fk_ender_user FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE indicacoes(
	id_indicacao INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_indicador INTEGER NOT NULL,
	id_empresa_indicador INTEGER NOT NULL,
	id_indicado INTEGER NOT NULL,
	
	CONSTRAINT fk_indicador FOREIGN KEY (id_indicador) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_indicado FOREIGN KEY (id_indicado) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_id_empresa FOREIGN KEY (id_empresa_indicador) REFERENCES empresas(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE certificados(
	id_certificado INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_usuario INTEGER NOT NULL,
	documento LONGBLOB NOT NULL,
	
	CONSTRAINT fk_certificado FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE amizade(
	id_amizade INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_usuario_um INTEGER NOT NULL,
	id_usuario_dois INTEGER NOT NULL,
	status_amizade BOOLEAN NOT NULL,
	
	CONSTRAINT fk_amizade_user_um FOREIGN KEY (id_usuario_um) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_amizade_user_dois FOREIGN KEY (id_usuario_dois) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE parentesco(
	id_parentesco INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	parentesco VARCHAR(10) NOT NULL
);

CREATE TABLE relac_parentesco(
	id_relac_parentesco INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_usuario INTEGER NOT NULL,
	id_parente INTEGER NOT NULL,
	id_parentesco INTEGER NOT NULL,
	
	CONSTRAINT fk_user_parent FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_id_parent FOREIGN KEY (id_parente) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_parentesco FOREIGN KEY (id_parentesco) REFERENCES parentesco(id_parentesco) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO parentesco values
	(DEFAULT, "Mãe"),
	(DEFAULT, "Pai"),
	(DEFAULT, "Irmão(a)"),
	(DEFAULT, "Marido"),
	(DEFAULT, "Esposa"),
	(DEFAULT, "Noivo(a)");
	
INSERT INTO beneficios values
	(DEFAULT, "Vale transporte"),
	(DEFAULT, "Vale alimentação"),
	(DEFAULT, "Vale refeição"),
	(DEFAULT, "Vale farmácia"),
	(DEFAULT, "Plano médico"),
	(DEFAULT, "Plano Odontológico");
