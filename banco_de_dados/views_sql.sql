

CREATE VIEW vw_empresa_usuario AS

select u.nome_usuario, u.foto_usuario, u.cpf, u.rg, u.telefone as telefone_usuario, u.formacao, u.estado_civil, u.email as email_usuario, e.foto_de_perfil_empresa, e.nome_empresa,
e.telefone as telefone_empresa, e.email as email_empresa, e.cnpj as cnpj_empresa_usuario from usuarios u inner join empresas e where u.id_empresa = e.id_empresa;
 
 
 
