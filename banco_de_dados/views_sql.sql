

CREATE VIEW vw_empresa_usuario AS

select u.nome_usuario, u.foto_usuario, u.cpf, u.rg, u.telefone as telefone_usuario, u.formacao, u.estado_civil, u.email as email_usuario, e.foto_de_perfil_empresa, e.nome_empresa,
e.telefone as telefone_empresa, e.email as email_empresa, e.cnpj as cnpj_empresa_usuario from usuarios u inner join empresas e where u.id_empresa = e.id_empresa;
 
 
 
 CREATE VIEW vw_empresa_usuario02 AS

select u.nome_usuario, u.foto_usuario, u.cpf, u.rg, u.telefone as telefone_usuario, u.formacao, u.estado_civil, u.email as email_usuario, e.foto_de_perfil_empresa, e.nome_empresa,
e.telefone as telefone_empresa, e.email as email_empresa, e.cnpj as cnpj_empresa_usuario from usuarios u join empresas e;
 
 
CREATE VIEW vw_endereco_usuario AS

select u.nome_usuario, u.foto_usuario, u.cpf, u.rg, u.telefone as telefone_usuario, u.formacao, u.estado_civil, u.email as email_usuario, e.cep, e.nome_pais,
e.nome_estado, e.nome_cidade, e.nome_bairro, e.nome_rua, e.numero, e.complemento from usuarios u inner join enderecos_usuario e where u.id_usuario = e.id_usuario;


CREATE VIEW vw_vaga AS 

SELECT v.id_vaga, v.id_empresa, v.cidade, v.cargo, v.salario, v.descricao, v.requisitos, v.expediente,
v.data_de_publicacao, v.data_encerra_vaga, v.email_de_contato, b.descricao AS beneficio FROM vagas v inner join relac_benef_vaga bv on bv.id_vaga = v.id_vaga inner join beneficios b on bv.id_beneficio = b.id_beneficio;



CREATE VIEW vw_vaga_02 AS 

SELECT e.nome_empresa, e.cnpj, v.id_empresa, v.id_vaga, v.cidade, v.cargo, v.salario, v.descricao, v.requisitos, v.expediente,
v.data_de_publicacao, v.data_encerra_vaga, v.quantidade_de_vagas, v.email_de_contato, v.status_vaga, b.descricao AS beneficio FROM empresas e 
inner join vagas v on e.id_empresa = v.id_empresa inner join relac_benef_vaga bv on bv.id_vaga = v.id_vaga inner join beneficios b on bv.id_beneficio = b.id_beneficio;


CREATE VIEW vw_enderecos_empresas AS 
SELECT ed.id_empresa, e.nome_empresa, ed.cep, ed.nome_pais, ed.nome_estado, ed.nome_cidade,
ed.nome_bairro, ed.nome_rua, ed.numero, ed.complemento FROM enderecos_empresa ed INNER JOIN empresas e ON ed.id_empresa = e.id_empresa;