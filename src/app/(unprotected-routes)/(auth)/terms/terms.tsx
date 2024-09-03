"use client";
import React from 'react';
import './terms.css';
import { useState, useEffect } from 'react';

function Terms() {

    const [userTerms, setUserTerms] = useState(true);
    const [advertiserTerms, setAdvertiserTerms] = useState(false);

    return (
        <div
            className="container-terms"
            style={{
                marginTop: "40px",
            }}
        >
            <div className="terms">
                <h1>TERMOS DE USO E SERVIÇOS</h1>
                <p><strong>Você é Anunciante ou Usuário?</strong></p>
                <div className="tab-buttons">
                    <button className={`tab-btn` + (advertiserTerms ? ' active' : '')} id="advertiser-tab"
                        onClick={() => {
                            if (advertiserTerms) {
                                return
                            } else {
                                setAdvertiserTerms(true)
                                setUserTerms(false)
                            }
                        }
                        }>Anunciantes</button>
                    <button className={`tab-btn` + (userTerms ? ' active' : '')} id="client-tab"
                        onClick={() => {
                            if (userTerms) {
                                setUserTerms(true)
                            } else {
                                setUserTerms(true)
                                setAdvertiserTerms(false)
                            }
                        }
                        }>Usuários</button>
                </div>
                {userTerms && (<>
                    <div id="client-content">
                        <h2>TERMOS DE USO E SERVIÇOS | USUÁRIOS</h2>
                        <p><strong>1. PARTES ENVOLVIDAS</strong></p>
                        <p>
                            1.1 Este documento constitui um contrato entre a TMF Technology Company Conteúdos na Internet LTDA, empresa legalmente constituída, com sede em Avenida Brig. Faria Lima, 1811, Jardim Paulistano, São Paulo, CEP 01452-001, inscrita no CNPJ/MF sob número 53.839.625/0001-08, doravante referida como &quot;O Faixa Rosa&quot;, e o usuário identificado no Cadastramento Eletrônico pelo seu Código de VISITANTE ASSINANTE, doravante denominado simplesmente como &quot;VISITANTE&quot;.
                        </p>

                        <p>
                            2.2 Todos os dispositivos dos Termos de Uso e Serviços são aplicáveis a este contrato.
                        </p>

                        <p><strong>2. OBJETO DOS TERMOS DE USO E SERVIÇOS</strong></p>
                        <p>2.1 Este contrato estabelece os termos e condições para o uso da plataforma e a contratação de planos de destaque em buscas na plataforma O Faixa Rosa. As informações detalhadas estão disponíveis para o VISITANTE no site www.faixarosa.com.br.</p>
                        <p>2.2 Todos os dispositivos dos Termos de Uso e Serviços são aplicáveis a este contrato.</p>

                        <p><strong>3. CÓDIGO DA ASSINATURA</strong></p>
                        <p>
                            3.1 A O Faixa Rosa atribuirá ao VISITANTE ASSINANTE um &quot;Código de VISITANTE ASSINANTE&quot; para identificação junto ao Serviço de Atendimento ao Cliente O Faixa Rosa, que servirá como código de identificação do usuário - ID.
                        </p>

                        <p>3.2 O Código de VISITANTE ASSINANTE será disponibilizado ao VISITANTE ASSINANTE após a confirmação do pedido e o envio dos Produtos/Serviços.</p>

                        <p><strong>4. CONTRATAÇÃO</strong></p>
                        <p>4.1 A contratação pelo VISITANTE ASSINANTE deve ser feita por meio do site de O Faixa Rosa, onde todos os Planos de Assinatura disponíveis, bem como suas condições específicas, serão exibidos.</p>
                        <p>4.2 O VISITANTE ASSINANTE deve selecionar o Plano de Assinatura desejado, observando as condições específicas fornecidas no site.</p>
                        <p>4.3 Ao confirmar o contrato, clicando no espaço reservado para tal no site de O Faixa Rosa, o VISITANTE ASSINANTE formaliza este instrumento.</p>

                        <p><strong>5. FORMAS DE PAGAMENTO</strong></p>
                        <p>5.1 As formas de pagamento aceitas na plataforma O Faixa Rosa incluem Cartão de Crédito (com as bandeiras Visa, Mastercard, American Express, Dinners Club, ELO, Discover) e PIX.</p>
                        <p>5.2 Os pagamentos via cartão de crédito serão processados pelos gateways de pagamento Safe2Pay e e-Rede.</p>
                        <p>5.3 Os pagamentos via PIX serão operacionalizados pela Aarin e pela Paymee.</p>

                        <p><strong>6. PLANOS DE ASSINATURA E BENEFÍCIOS</strong></p>
                        <p>6.1 O Faixa Rosa oferece o Plano de Assinatura Premium, que inclui acesso a todos os conteúdos da Plataforma e prioridade no suporte.</p>

                        <p><strong>7. BANCO DE DADOS</strong></p>
                        <p>7.1 Ao contratar um Produto/Serviço, o VISITANTE ASSINANTE concorda em fazer parte do banco de dados de O Faixa Rosa.</p>
                        <p>7.2 As informações cadastrais dos VISITANTES ASSINANTES são armazenadas de acordo com rigorosos critérios de segurança e tratadas conforme a legislação aplicável e os termos de uso da plataforma.</p>

                        <p><strong>8. SERVIÇO DE ATENDIMENTO AO VISITANTE ASSINANTE</strong></p>
                        <p>8.1 O Faixa Rosa disponibiliza serviço de atendimento ao VISITANTE ASSINANTE através do e-mail contato@faixarosa.com.br.</p>

                        <p><strong>9. PRAZO</strong></p>
                        <p>9.1 Este contrato tem duração inicial de 30 dias, podendo ser prorrogado por períodos iguais.</p>

                        <p><strong>10. PROCEDIMENTO DE RENOVAÇÃO</strong></p>
                        <p>10.1 O Faixa Rosa adota o procedimento de renovação programada da assinatura, garantindo facilidade e agilidade ao VISITANTE ASSINANTE.</p>

                        <p><strong>11. CANCELAMENTO E RESCISÃO</strong></p>
                        <p>11.1 O cancelamento da assinatura e a rescisão do contrato podem ocorrer em caso de infração contratual ou inadimplemento, sujeitos a notificação prévia.</p>

                        <p><strong>12. ALTERAÇÕES DOS TERMOS DE USO E SERVIÇOS</strong></p>
                        <p>12.1 Quaisquer alterações que impactem ônus financeiro ao VISITANTE ASSINANTE serão comunicadas previamente, permitindo manifestação de concordância ou renegociação das condições.</p>

                        <p><strong>13. FORO</strong></p>
                        <p>13.1 Fica assegurado ao VISITANTE ASSINANTE o direito de recorrer ao Foro da Comarca de sua residência para questões oriundas deste instrumento.</p>

                        <p><strong>Reforço sobre a Plataforma:</strong></p>
                        <p>O Faixa Rosa destina-se a maiores de 18 anos e contém conteúdo adulto.</p>

                        <p><strong>Última Atualização:</strong> 13 de Maio de 2024.</p>
                    </div>
                </>)}
                {advertiserTerms && (<>
                    <div id="advertiser-content">
                        <h2>TERMOS DE USO E SERVIÇOS | ANUNCIANTE</h2>
                        <p>Olá! Que bom contar com seu interesse! Antes de usar nossos serviços, tire um tempo para ler e conhecer as regras que regem nossa relação com você.</p>
                        <p>Este documento (“Termos e Condições Gerais de Uso e Serviços” ou “Termos”) apresenta as condições de uso da Plataforma disponibilizada pelo FAIXA ROSA PROVEDOR DE CONTEÚDO NA INTERNET LTDA, empresa legalmente constituída, com sede em Av. Paulista, 171, Edifício D. Pedro I de Alcântara, PVMTO 04, Sala E3 VG, 01.311-904 inscrita no CNPJ/MF ou CPF/MF sob número 37.181.811/0001-46, (“FAIXA ROSA”), a qual oferece cessão de espaço para anúncios publicitários. Nela, os ANUNCIANTES expõem o seu anúncio e adicionam as informações que considerem pertinentes acerca do conteúdo anunciado, a fim de que os VISITANTES possam efetuar buscas na PLATAFORMA de modo a localizar os anúncios que se adequem ao perfil desejado.</p>
                        <p>Abaixo esclarecemos alguns pontos que julgamos importantes. Caso persista alguma dúvida acerca de quaisquer pontos discutidos ou não neste documento, por favor, não hesite em contatar-nos pelo endereço contato@faixarosa.com.br</p>
                        <h2>1. DEFINIÇÕES:</h2>
                        <p><strong>1.1</strong> No presente instrumento, entendemos as expressões abaixo de acordo com as seguintes definições:</p>
                        <h3>USUÁRIOS:</h3>
                        <p><strong>a)</strong> VISITANTE: Pessoa física sem cadastro na PLATAFORMA, que acesse os conteúdos publicitários ofertados pelos ANUNCIANTES na PLATAFORMA.</p>
                        <p><strong>b)</strong> CONTRATANTE: Pessoa física cadastrada na PLATAFORMA, que acesse os conteúdos publicitários ofertados pelos ANUNCIANTES na PLATAFORMA.</p>
                        <p><strong>c)</strong> CONTRATANTE PREMIUM: Pessoa física cadastrada na PLATAFORMA, que acesse os conteúdos publicitários ofertados pelos ANUNCIANTES na PLATAFORMA na modalidade paga premium.</p>
                        <p><strong>d)</strong> ANUNCIANTE: Pessoa física cadastrada na PLATAFORMA, que, no uso desta, irá divulgar os seus anúncios aos VISITANTES.</p>
                        <p><strong>e)</strong> ASSINANTE: Pessoa física cadastrada na PLATAFORMA como ANUNCIANTE, que, no uso desta, contrata os serviços da PLATAFORMA para otimizar a procura de seus anúncios aos VISITANTES.</p>
                        <p><strong>f)</strong> PLATAFORMA: Sistema constituído por uma aplicação web, onde há cessão de espaço publicitário para anúncios, em que todos os USUÁRIOS podem visualizar os anúncios publicados pelos ANUNCIANTES cadastrados na plataforma do FAIXA ROSA.</p>
                        <h2>2. ADESÃO:</h2>
                        <p><strong>2.1</strong> Este instrumento regula as condições de uso dos serviços da PLATAFORMA sendo um contrato entre os USUÁRIOS e O FAIXA ROSA. A utilização dos serviços oferecidos através da PLATAFORMA indica expressamente que você concorda com todos os termos e condições contidos neste instrumento e com as disposições legais aplicáveis à espécie.</p>
                        <p><strong>2.2</strong> VOCÊ ENTENDE E CONCORDA QUE O FAIXA ROSA CONSIDERARÁ O USO DOS SERVIÇOS DISPOSTOS COMO ACEITAÇÃO DESTES TERMOS E TODAS AS DEMAIS DISPOSIÇÕES LEGAIS PERTINENTES À ESPÉCIE.</p>
                        <p><strong>2.3</strong> AO ACEITAR OS TERMOS DO PRESENTE INSTRUMENTO, O USUÁRIO AUTORIZA EXPRESSAMENTE O TRATAMENTO DE SEUS DADOS, A FIM DE GARANTIR A MANUTENÇÃO E O BOM DESEMPENHO DAS FUNCIONALIDADES DA PLATAFORMA.</p>
                        <p><strong>2.4</strong> O USUÁRIO, NESTE ATO, MANIFESTA O SEU COMPLETO CONSENTIMENTO PARA O COMPARTILHAMENTO DOS DADOS COLETADOS E TRATADOS PELO FAIXA ROSA, NOS TERMOS DESTE INSTRUMENTO, COM OUTRAS EMPRESAS QUE FAÇAM PARTE DE SEU GRUPO ECONÔMICO, OU SEJAM SUAS PRESTADORAS DE SERVIÇO.</p>
                        <p><strong>2.5</strong> Caso você NÃO CONCORDE com as disposições previstas neste instrumento, NÃO acesse, visualize, baixe ou utilize de qualquer forma nenhuma página, conteúdo, informação ou serviço do FAIXA ROSA.</p>
                        <p><strong>2.6</strong> Os presentes termos estão disponíveis para leitura, a qualquer momento, na PLATAFORMA, em <a href="https://faixarosa.com.br/terms" target="_blank">https://faixarosa.com.br/terms</a>.</p>
                        <h2>3. CONDIÇÕES GERAIS DE USO:</h2>
                        <p><strong>3.1</strong> O FAIXA ROSA apenas é uma PLATAFORMA de cessão de espaço publicitário, sendo a sua responsabilidade restrita tão somente ao funcionamento correto da PLATAFORMA e de suas funcionalidades, conforme este instrumento, não detendo O FAIXA ROSA nenhuma responsabilidade sobre: (i) eventuais negociações realizadas entre os USUÁRIOS; (ii) a verificação se o ANUNCIANTE realmente detém a qualificação informada em seu anúncio; (iii) a qualidade dos anúncios; (iv) a efetivação de qualquer pagamento acertado entre os USUÁRIOS; (vii) por eventuais danos decorrentes de eventos de terceiros, englobando, entre outros, ataque hacker e softwares maliciosos; e (viii) qualquer outro ato ou fato decorrente da conduta dos USUÁRIOS.</p>
                        <p><strong>3.2</strong> O FAIXA ROSA possibilita que os VISITANTES e os ANUNCIANTES contatem-se de forma direta, sem qualquer intervenção, seja na negociação ou na efetivação do que fora negociado, não sendo O FAIXA ROSA intermediadora ou fornecedora de quaisquer dos serviços ou produtos anunciados na PLATAFORMA, ou empregador/representante/agente de qualquer dos ANUNCIANTES nesta cadastrado.</p>
                        <p><strong>3.3</strong> O FAIXA ROSA:</p>
                        <p>a) Disponibiliza a PLATAFORMA ao USUÁRIO, realiza a verificação da documentação enviada pelos USUÁRIOS não detém nenhuma relação com os ANUNCIANTES cadastrados, não sendo possível imputar à FAIXA ROSA a responsabilidade por qualquer dano eventualmente causado aos VISITANTES ou a terceiros, por atos oriundos dos ANUNCIANTES através da PLATAFORMA.</p>
                        <p>b) Não detém nenhuma relação com os VISITANTES cadastrados, não sendo possível imputar à FAIXA ROSA a responsabilidade por qualquer dano eventualmente causado aos ANUNCIANTES ou a terceiros, por atos oriundos dos VISITANTES através da PLATAFORMA.</p>
                        <p>c) Não intermedia qualquer negociação que venha a ser realizada entre USUÁRIOS, ficando somente a cargo destes o acerto das condições do negócio que efetivarem, tais como o valor, a qualidade, a forma, o prazo e outros pontos que julgarem necessários.</p>
                        <p>d) Não interfere em nenhuma negociação que eventualmente venha a ser realizada entre USUÁRIOS, ficando somente a cargo destes o acerto de quaisquer condições de realização das negociações praticadas, tais como o valor, a qualidade, a forma, o prazo e outros pontos que julgarem necessários.</p>
                        <p><strong>3.4</strong> Por não figurar como parte nas transações que eventualmente sejam firmadas entre os USUÁRIOS, O FAIXA ROSA também não pode obrigar os USUÁRIOS a honrarem com as possíveis obrigações assumidas no momento da realização das negociações.</p>
                        <p><strong>3.5</strong> Em nenhuma hipótese o FAIXA ROSA será responsabilizada por quaisquer danos suportados pelos USUÁRIOS por eventual indisponibilidade temporária da PLATAFORMA.</p>
                        <p><strong>4.1</strong> Os USUÁRIOS deverão efetuar cadastro, preenchendo todos os dados solicitados pela PLATAFORMA no momento do cadastramento, também declarando que preenchem os seguintes pré-requisitos para utilização da PLATAFORMA:</p>
                        <p>a) Ser maior de idade e absolutamente capaz.</p>
                        <p>b) Possuir a capacidade de comprometer-se aos presentes termos, prestando todas as informações que forem necessárias para realização de seu cadastro. Declarando prestá-las de maneira idônea e verídica, sob pena de responder penal e civilmente.</p>
                        <p>c) Possuir número de telefone móvel válido e endereço eletrônico (e-mail), por meio do qual O FAIXA ROSA possa entrar em contato quando necessário.</p>
                        <p><strong>4.2</strong> É de exclusiva responsabilidade dos USUÁRIOS fornecer, atualizar e garantir a veracidade dos dados cadastrais, não recaindo à FAIXA ROSA qualquer tipo de responsabilidade civil e criminal resultante de dados inverídicos, incorretos ou incompletos fornecidos pelos USUÁRIOS.</p>
                        <p><strong>4.3 VISITANTES:</strong></p>
                        <p>a) E-mail</p>
                        <p>A finalidade de tal coleta é identificá-lo, bem como habilitá-lo ao correto uso da PLATAFORMA, e, com isto, O FAIXA ROSA poderá assegurar a boa qualidade dos serviços licenciados e a base legal é a execução do contrato.</p>
                        <p><strong>4.4 ANUNCIANTES:</strong></p>
                        <p>a) Nome</p>
                        <p>b) Sobrenome</p>
                        <p>c) Filiação</p>
                        <p>d) Número do CPF</p>
                        <p>e) Cópia do Documento de Identificação (frente e verso)</p>
                        <p>f) Vídeo de Apresentação</p>
                        <p>g) Número de Telefone Móvel</p>
                        <p>h) Dados de Atendimento</p>
                        <p><strong>4.5</strong> A finalidade de tal coleta é identificá-lo, bem como habilitá-lo ao correto uso da PLATAFORMA, e, com isto, O FAIXA ROSA poderá assegurar a boa qualidade dos serviços licenciados e a base legal é a execução do contrato e prevenção a fraudes.</p>
                        <p><strong>4.6 ASSINANTES:</strong></p>
                        <p>a) Nome</p>
                        <p>b) Sobrenome</p>
                        <p>c) Filiação</p>
                        <p>d) Número do CPF</p>
                        <p>e) Cópia do Documento de Identificação (frente e verso)</p>
                        <p>f) Vídeo de Apresentação</p>
                        <p>g) Número de Telefone Móvel</p>
                        <p>h) Dados de Atendimento</p>
                        <p>i) Dados de Pagamento</p>
                        <p><strong>4.7</strong> A finalidade de tal coleta é identificá-lo, bem como habilitá-lo ao correto uso da PLATAFORMA, e, com isto, O FAIXA ROSA poderá assegurar a boa qualidade dos serviços licenciados e a base legal é a execução do contrato e prevenção a fraudes.</p>
                        <p><strong>4.8</strong> O FAIXA ROSA se reserva o direito de utilizar todos os meios válidos e possíveis para identificar seus ANUNCIANTES, bem como de solicitar dados adicionais e documentos que estime serem pertinentes a fim de conferir os dados informados, incluindo antecedentes criminais. Neste caso, o uso da PLATAFORMA pelo ANUNCIANTE fica condicionado ao envio dos documentos eventualmente solicitados.</p>
                        <p><strong>4.9</strong> Caso um cadastro seja considerado suspeito de conter dados errôneos ou inverídicos, O FAIXA ROSA se reserva ao direito de suspender, temporária ou definitivamente, sem necessidade de aviso prévio, o USUÁRIO responsável pelo cadastro. No caso de suspensão, não assistirá ao USUÁRIO direito a qualquer tipo de indenização ou ressarcimento por perdas e danos, lucros cessantes ou ainda danos morais.</p>
                        <p><strong>4.10</strong> Para melhor utilização da PLATAFORMA, o ANUNCIANTE deverá manter atualizado seu anúncio (perfil) com os seguintes dados: i) descrição do perfil; ii) horários de atendimento; iii) tempo de atendimento; iv) serviços prestados; v) serviços adicionais; e, vi) localidades de atendimento.</p>
                        <p><strong>4.11</strong> O anúncio é único, pessoal e identificado internamente pelo CPF do ANUNCIANTE cadastrado, devendo pertencer à pessoa física, portadora dos documentos fornecidos no ato do cadastro, não podendo ser compartilhado, pertencer a grupo de pessoas, ser cedido ou comercializado sob qualquer forma ou pretexto. A simulação, ocultação de informações ou indução a erro configuram infração grave ao presente documento, e sujeita o ANUNCIANTE a penalidade de banimento, além das sanções legais previstas em lei.</p>
                        <p><strong>4.11.1</strong> O ANUNCIANTE está ciente de que, caso opte por excluir a sua conta, ao restaurá-la, todas as informações previamente inseridas serão restabelecidas, mantendo a integridade dos seus dados, uma vez que seu anúncio está vinculado ao CPF cadastrado.</p>
                        <p><strong>4.12</strong> É expressamente vedada a criação de mais de um cadastro por USUÁRIO na PLATAFORMA. Em caso de multiplicidade de cadastros elaborados por um só USUÁRIO, O FAIXA ROSA se reserva o direito de a seu exclusivo critério, sem contrapartida indenizatória e sem necessidade de prévia anuência ou comunicação, inabilitar todos os cadastros existentes em nome deste USUÁRIO, podendo não aceitar novo cadastro do referido USUÁRIO na PLATAFORMA.</p>
                        <p><strong>4.13</strong> O USUÁRIO compromete-se a notificar O FAIXA ROSA imediatamente, por meio dos canais de contato mantidos pelO FAIXA ROSA na PLATAFORMA, a respeito de qualquer uso não autorizado de sua conta. O USUÁRIO será o único responsável pelas operações efetuadas em sua conta, uma vez que o acesso só será possível mediante a utilização de senha de seu exclusivo conhecimento.</p>
                        <p><strong>4.14</strong> O USUÁRIO compromete-se a notificar O FAIXA ROSA imediatamente, por meio dos canais de contato mantidos pelO FAIXA ROSA na PLATAFORMA, a respeito de qualquer conhecimento de irregularidades de outros USUÁRIOS que possam ocasionar danos aos próprios USUÁRIOS da PLATAFORMA, a esta, O FAIXA ROSA ou a terceiros.</p>
                        <p><strong>4.15</strong> Em nenhuma hipótese será permitida a cessão, a venda, o aluguel ou outra forma de transferência do cadastro do USUÁRIO.</p>
                        <p><strong>4.16</strong> O apelido que o USUÁRIO utiliza na PLATAFORMA não poderá guardar semelhança com o nome FAIXA ROSA, tampouco poderá ser utilizado qualquer apelido que insinue ou sugira que o vincule à FAIXA ROSA.</p>
                        <p><strong>4.17</strong> Ao seu exclusivo critério O FAIXA ROSA poderá excluir, inabilitar, criar limites no uso do serviço, suspender, bloquear, por tempo indeterminado, sem aviso prévio ou contrapartida indenizatória, cadastros de USUÁRIOS que sejam considerados ofensivos, que infrinjam os termos deste instrumento ou a legislação em vigor.</p>
                        <p><strong>4.18</strong> O FAIXA ROSA se reserva o direito de não permitir novo cadastro de USUÁRIOS que já tenham sido cancelados, inabilitados, bloqueados, excluídos ou suspensos da PLATAFORMA. Não se permitirá, ainda, a criação de novos cadastros por pessoas cujos cadastros originais tenham sido cancelados, bloqueados, inabilitados, excluídos ou suspensos por infrações às políticas da PLATAFORMA ou à legislação vigente.</p>
                        <p><strong>4.19</strong> O FAIXA ROSA se reserva o direito de, unilateralmente, sem prévio aviso, anuência ou contrapartida indenizatória, recusar qualquer solicitação de cadastro de um USUÁRIO na PLATAFORMA, bem como cancelar, inabilitar, bloquear, excluir ou suspender o uso de um cadastro previamente aceito.</p>
                        <p><strong>4.20</strong> O Cadastro deve ser regularmente atualizado a cada 6 meses por via de Mídia de Verificação, para garantir a fidedignidade acerca da identidade do (a) ANUNCIANTE. O FAIXA ROSA poderá solicitar a qualquer momento a autenticação facial da(o) ANUNCIANTE, assim também garantindo a segurança sobre a identidade da(o) mesma(o).</p>
                        <p><strong>4.21</strong> Ao concordar com o presente instrumento, o USUÁRIO declara estar ciente de que é o único responsável pelo seu cadastro, sendo certo que qualquer prejuízo causado pela inserção de informações desatualizadas, inexatas ou inverídicas, não poderão ser imputados à FAIXA ROSA ou à PLATAFORMA.</p>
                        <h2>5. FUNCIONALIDADES:</h2>
                        <p>5.1 O FAIXA ROSA poderá a qualquer tempo, sem necessidade de aviso prévio, ou contrapartida indenizatória, editar e/ou excluir as funcionalidades existentes, bem como incluir novas funcionalidades à PLATAFORMA.</p>
                        <p>5.2 No momento do cadastro, os USUÁRIOS terão acesso às funcionalidades contratadas na PLATAFORMA, declarando, para tanto, terem lido, compreendido e aceitado todos os dispositivos contidos neste Termos de Uso.</p>
                        <p>5.3 O (a) ANUNCIANTE, poderá ser removido (a), definitiva ou temporariamente da listagem de sua cidade ou de outro filtro de pesquisa que resultaria em seu anúncio, ainda que possua assinatura em vigor ou planos ativos, na hipótese de reiterada negativa a verificação de sua identidade por meio das ferramentas que faz uso a PLATAFORMA.</p>
                        <p>5.4 A PLATAFORMA, ainda poderá instituir regras de restrinjam o acesso a determinadas funcionalidades, mediante critérios de sua própria conveniência comercial, inclusive estipulando unilateralmente dias e/ou horários para aplicar tais restrições de acordo com os planos, ou ausência destes, que cada usuário possua em seu perfil.</p>
                        <p>5.5 OS USUÁRIOS, poderão através de funcionalidade específica publicar reviews aos outros USUÁRIOS, e estes estarão sujeitos a moderação da PLATAFORMA, nas seguintes hipóteses:</p>
                        <ul>
                            <li>a) Quando o review for reportado pelo USUÁRIO avaliado.</li>
                            <li>b) Quando constar palavras ou conteúdo ofensivo.</li>
                            <li>c) Quando conter informações pessoais, que identifiquem terceira pessoa, marca ou propriedade intelectual.</li>
                            <li>d) Quando infringir os Termos de Uso ou as Diretrizes da Comunidade.</li>
                            <li>e) Quando conter informações manifestamente inverídicas, caluniosas ou difamatórias.</li>
                            <li>f) Quando infringir qualquer regulamento ou legislação a que seja submetida a PLATAFORMA.</li>
                        </ul>
                        <p>5.6 Os reviews passam a ser vinculados internamente ao CPF do USUÁRIO, e na hipótese de exclusão de um anúncio a criação de novo, os reviews permanecerão necessariamente vinculados ao USUÁRIO.</p>
                        <p>5.7 Caso o USUÁRIO, com o objetivo de fraudar a funcionalidade e induzir os demais usuários a erro realize sua autoavaliação, este estará sujeito às penalidades previstas no presente documento. Inclusive a de banimento.</p>
                        <p>5.8 O FAIXA ROSA reserva-se ao direito de não moderar determinado review, caso este não infrinja qualquer disposto de suas políticas, e é isento de responsabilização civil, penal e administrativa pelo conteúdo gerado por terceiros, sendo sua obrigação tão somente manter o regular funcionamento da PLATAFORMA.</p>
                        <p>5.9 Fica resguardado a PLATAFORMA o direito de restringir as mídias publicadas por um usuário ANUNCIANTE, parcial ou totalmente, cuja visualização poderá ser restrita aos usuários VISITANTES, de acordo com critérios estabelecidos pela PLATAFORMA, quais sejam a regularidade do cadastro, a assinatura de planos, ou ausência destes, bem como o comportamento do USUÁRIO, de acordo com as diretrizes da comunidade.</p>

                        <h2>6. DA PROPRIEDADE INTELECTUAL DO FAIXA ROSA:</h2>
                        <p>6.1 O USUÁRIO reconhece expressamente que, através deste instrumento, recebe dO FAIXA ROSA a outorga de uma licença de uso da PLATAFORMA, que é intransferível, sendo vedado o sublicenciamento, para uso em território nacional ou estrangeiro, pelo tempo em que perdurar a adesão a este termo, restando vedado o uso da PLATAFORMA em desacordo com o previsto neste instrumento.</p>

                        <h2>7. OBRIGAÇÕES DOS USUÁRIOS:</h2>
                        <p>7.1 Responsabilidades exclusivas do USUÁRIO:</p>
                        <ul>
                            <li>a) Pela escolha, realização de negociação, acerto de preço, forma de pagamento e a respectiva contratação dos demais USUÁRIOS;</li>
                            <li>b) Pela veracidade dos dados informados por si próprio na PLATAFORMA;</li>
                            <li>c) Pela segurança de sua senha e pelo uso de seu cadastro na PLATAFORMA;</li>
                            <li>d) Pela resolução de todo e qualquer problema com negociação resultante de anúncio oriundo da PLATAFORMA;</li>
                            <li>e) Pela manutenção da atualização de seus dados cadastrais (em especial: telefone e e-mail) e dados de pagamento (em especial o CPF para pagamento via PIX);</li>
                            <li>f) Responder por quaisquer danos causados a terceiros, a outros USUÁRIOS, à PLATAFORMA ou à própriO FAIXA ROSA, decorrentes do uso das funcionalidades da PLATAFORMA.</li>
                        </ul>
                        <p>7.2 Os USUÁRIOS não devem utilizar a PLATAFORMA para fins diversos daqueles estipulados neste instrumento, em especial:</p>
                        <ul>
                            <li>a) Utilizar a PLATAFORMA para a realização de atos ilícitos, imorais, que afrontem a moral e os bons costumes;</li>
                            <li>b) Utilizar a PLATAFORMA para a promoção de conteúdos de cunho pornográfico ou sexual, bem como de conteúdos que incitem a prática de atos ilegais;</li>
                            <li>c) Utilizar a PLATAFORMA para a promoção de conteúdos de violência, discriminação de qualquer natureza, preconceito, intolerância ou ódio;</li>
                            <li>d) Utilizar a PLATAFORMA para promover a venda, distribuição ou divulgação de produtos ilegais ou proibidos pela legislação vigente;</li>
                            <li>e) Utilizar a PLATAFORMA para coletar ou armazenar dados pessoais de outros USUÁRIOS ou VISITANTES, sem o seu consentimento expresso;</li>
                            <li>f) Utilizar a PLATAFORMA para a prática de spam, envio de mensagens não solicitadas ou qualquer tipo de comunicação comercial não autorizada;</li>
                            <li>g) Utilizar a PLATAFORMA para a prática de hacking, phishing, ataques de negação de serviço ou qualquer outra atividade relacionada a ciberataques;</li>
                            <li>h) Utilizar a PLATAFORMA para falsificar identidade, adulterar documentos ou praticar qualquer tipo de fraude ou atividade ilegal;</li>
                            <li>i) Utilizar a PLATAFORMA para criar, distribuir ou divulgar vírus, malware ou qualquer tipo de código malicioso;</li>
                            <li>j) Utilizar a PLATAFORMA para interferir no funcionamento normal da mesma ou prejudicar sua segurança, integridade ou disponibilidade.</li>
                        </ul>

                        <h2>8. F.PAY:</h2>
                        <p>8.1 A funcionalidade F.PAY, proporciona aos USUÁRIOS a possibilidade de visualização de todas as operações financeiras realizadas na PLATAFORMA, tais como aquisições de funcionalidades pagas e resgates de valores recebidos na conta digital vinculada ao CPF do USUÁRIO.</p>
                        <p>8.2 As transações financeiras realizadas na PLATAFORMA poderão ser processadas por terceiros, como gateways de pagamento, instituições financeiras, bandeiras de cartão de crédito, entre outros, que possuem suas próprias políticas de privacidade e segurança.</p>
                        <p>8.3 Os USUÁRIOS que optarem por utilizar a funcionalidade F.PAY declaram estar cientes e concordar com todas as condições e políticas dos terceiros envolvidos no processamento de suas transações financeiras.</p>
                        <p>8.4 O FAIXA ROSA se reserva o direito de adotar medidas adicionais de segurança para autenticar as transações realizadas pelos USUÁRIOS, a fim de prevenir fraudes e garantir a integridade do sistema.</p>
                        <p>8.5 Em caso de suspeita de atividade fraudulenta ou irregularidade nas transações financeiras, o FAIXA ROSA poderá suspender temporariamente a conta do USUÁRIO envolvido, até que a situação seja devidamente esclarecida e resolvida.</p>
                        <p>8.6 O FAIXA ROSA não se responsabiliza por eventuais problemas ou falhas no processamento das transações financeiras, decorrentes de ações ou omissões dos terceiros envolvidos, exceto nos casos de comprovada negligência ou conduta dolosa por parte da PLATAFORMA.</p>

                        <h2>9. TRATAMENTO DOS DADOS:</h2>
                        <p>9.1 O tratamento dos dados pessoais dos USUÁRIOS pela PLATAFORMA será realizado em conformidade com a legislação aplicável, em especial a Lei Geral de Proteção de Dados (LGPD) e demais normas pertinentes.</p>
                        <p>9.2 Os dados pessoais dos USUÁRIOS poderão ser compartilhados com empresas parceiras do FAIXA ROSA, para viabilizar a prestação dos serviços oferecidos pela PLATAFORMA, bem como para aprimorar a experiência do usuário.</p>
                        <p>9.3 A PLATAFORMA adotará medidas técnicas e organizacionais adequadas para garantir a segurança e a privacidade dos dados dos USUÁRIOS, buscando minimizar os riscos de violação, vazamento ou uso indevido das informações.</p>
                        <p>9.4 Sempre que possível, os dados pessoais dos USUÁRIOS serão pseudonimizados ou anonimizados, de modo a proteger sua identidade e privacidade, ressalvadas as hipóteses em que a identificação seja necessária para a execução dos serviços prestados pela PLATAFORMA.</p>
                        <p>9.5 Os USUÁRIOS poderão exercer seus direitos de acesso, retificação, exclusão, portabilidade e oposição quanto aos seus dados pessoais, mediante solicitação à PLATAFORMA, nos termos da legislação vigente.</p>
                        <p>9.6 O FAIXA ROSA poderá utilizar cookies e outras tecnologias de rastreamento para melhorar a experiência do usuário na PLATAFORMA, bem como para coletar informações sobre o uso e a navegação dos USUÁRIOS, de acordo com a Política de Cookies.</p>

                        <h2>10. DA LICENÇA DO USO DE IMAGEM:</h2>
                        <p>10.1 O USUÁRIO, ao aceitar este instrumento, autoriza expressamente o FAIXA ROSA a utilizar sua imagem nos anúncios veiculados na PLATAFORMA, seja em formato de fotografia ou vídeo, sem que isso implique em qualquer violação de seus direitos de imagem ou de personalidade.</p>
                        <p>10.2 O FAIXA ROSA poderá utilizar tecnologias de reconhecimento facial para prevenir fraudes, autenticar a identidade dos USUÁRIOS e garantir a segurança da PLATAFORMA, mediante consentimento prévio e expresso dos usuários, nos termos da legislação aplicável.</p>

                        <h2>11. POLÍTICA DE NOMES E PERFIL:</h2>
                        <p>11.1 Os USUÁRIOS deverão utilizar nomes verdadeiros e completos em seus perfis na PLATAFORMA, sendo vedado o uso de pseudônimos, apelidos ou nomes fictícios, exceto nos casos autorizados expressamente pelo FAIXA ROSA.</p>
                        <p>11.2 O FAIXA ROSA se reserva o direito de suspender ou banir os USUÁRIOS que utilizarem nomes inadequados, ofensivos, impróprios ou que violem os direitos de terceiros, bem como os que pratiquem atos de falsidade ideológica ou representação fraudulenta.</p>

                        <h2>12. DISPOSIÇÕES GERAIS:</h2>
                        <p>12.1 Este Termos de Uso constitui o acordo integral entre o USUÁRIO e o FAIXA ROSA, prevalecendo sobre quaisquer entendimentos anteriores ou contemporâneos, verbais ou escritos, sobre o mesmo objeto.</p>
                        <p>12.2 A invalidade ou inexequibilidade de qualquer disposição deste instrumento não afetará a validade ou exequibilidade das demais disposições, que continuarão em pleno vigor e efeito.</p>
                        <p>12.3 Este Termos de Uso será regido e interpretado de acordo com as leis brasileiras, sendo eleito o Foro da Comarca de São Paulo, Estado de São Paulo, como o único competente para dirimir quaisquer litígios decorrentes deste instrumento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>
                        <p>12.4 O FAIXA ROSA poderá atualizar ou modificar este Termos de Uso a qualquer momento, mediante aviso prévio aos USUÁRIOS, por meio da PLATAFORMA ou por outros meios de comunicação disponibilizados pela PLATAFORMA, cabendo aos USUÁRIOS verificar periodicamente as alterações realizadas.</p>
                        <p>12.5 A continuidade do uso da PLATAFORMA pelos USUÁRIOS após a entrada em vigor das alterações deste Termos de Uso implicará na aceitação tácita dos novos termos e condições, vinculando as partes da mesma forma que se houvessem sido assinados.</p>
                        <h2>Termos e Condições de Contratação de Assinaturas</h2>

                        <p>São partes neste instrumento, de um lado, FAIXA ROSA PROVEDOR DE CONTEÚDO NA INTERNET LTDA, empresa legalmente constituída, com sede em Av. Paulista, 171, Edifício D. Pedro I de Alcântara, PVMTO 04, Sala E3 VG, 01.311-904 inscrita no CNPJ/MF ou CPF/MF sob número 37.181.811/0001-46, doravante identificada simplesmente como FAIXA ROSA e, de outro lado, a pessoa física ou jurídica identificada no Cadastramento Eletrônico pelo seu Código de Assinante, doravante identificada simplesmente como ASSINANTE.</p>

                        <h2>1. Objeto dos Termos e Condições</h2>
                        <p>1.1 O presente instrumento tem por objeto estabelecer os termos e condições da contratação celebrada entre FAIXA ROSA e ASSINANTE (ANUNCIANTE), para a contratação de plano de destaque em buscas na plataforma FAIXA ROSA.</p>
                        <p>1.2 As informações encontram-se disponíveis ao ASSINANTE no site www.faixarosa.com.br Todas as disposições dos Termos de Uso e Serviços se aplicam ao presente instrumento.</p>

                        <h2>2. Código da Assinatura</h2>
                        <p>2.1 O FAIXA ROSA concederá ao ASSINANTE um “Código de Assinante” para identificação do ASSINANTE junto ao Serviço de Atendimento ao Cliente FAIXA ROSA, que será o código de identificação do usuário - ID AD. O ASSINANTE pode encontrá-lo após a confirmação do seu pedido e quando do envio dos Produtos/Serviços ao ASSINANTE.</p>
                        <h2>3. Entrega e Onboarding</h2>
                        <p>3.1 A entrega dos Produtos/Serviços se iniciará imediatamente após a contratação e a confirmação do pagamento.</p>
                        <p>3.2 O ASSINANTE durante seu cadastro terá disponibilizadas instruções para conclusão do processo e poderá acompanhar a evolução do pedido via SMS e E-mail.</p>

                        <h2>4. Contratação</h2>
                        <p>4.1 PREÇOS, FORMAS DE PAGAMENTO: A contratação pelo ASSINANTE deverá ser realizada por meio do “site” do FAIXA ROSA, onde constarão todos os Planos de Assinatura disponíveis, bem como suas condições específicas.</p>
                        <p>4.2 O ASSINANTE deverá optar pelo Plano de Assinatura que deseja contratar, sendo certo que suas condições específicas (Valores, Prazos, Condições de Pagamento e etc.) constantes do site passarão a fazer parte integrante e inseparável do presente instrumento.</p>
                        <p>4.3 O ASSINANTE expressamente declara e garante, para todos os fins de direito:</p>
                        <ol>
                            <li>possuir capacidade jurídica para celebrar este instrumento e para utilizar o Produto/ Serviço;</li>
                            <li>reconhecer que o presente instrumento se formaliza, vinculando as partes, com a confirmação contratual, o que se fará mediante o clique no espaço reservado para tanto no site FAIXA ROSA.</li>
                        </ol>
                        <p>4.4 Como contraprestação pelo objeto deste contrato, o ASSINANTE deverá pagar à FAIXA ROSA a quantia correspondente ao Plano contratado, conforme opção realizada na hora da compra e vigente no ato da compra.</p>
                        <p>4.5 A forma de pagamento será escolhida pelo ASSINANTE dentre as constantes do “site” para o Plano escolhido, onde constarão também a periodicidade da cobrança e eventuais penalidades aplicáveis.</p>
                        <p>4.6 O FAIXA ROSA se reserva o direito de, unilateralmente, sem a necessidade de prévio aviso, reajustar os valores de seus planos e assinaturas, preservadas as condições dos contratos com prazo determinado e vigência limitada, enquanto perdurar sua vigência.</p>

                        <h2>5. Banco de Dados</h2>
                        <p>5.1 O ASSINANTE se declara ciente de que, a partir da contratação da assinatura de um Produto/Serviço, o mesmo passa a fazer parte do banco de dados do FAIXA ROSA, por meio do qual poderá vir a receber informações do FAIXA ROSA. Caso o ASSINANTE não tenha o interesse em receber essas informações, fica assegurado ao mesmo o direito de manifestar sua oposição, bastando que tal decisão seja comunicada para o Serviço de Atendimento ao Cliente do FAIXA ROSA.</p>
                        <p>5.2 A inviolabilidade e o sigilo dos dados cadastrais de todos os seus ASSINANTES são assegurados pelo FAIXA ROSA. Todas as suas informações são armazenadas dentro dos mais rígidos critérios de segurança no banco de dados do FAIXA ROSA e são tratadas de acordo com a legislação aplicável e com os termos de uso da plataforma, cláusula 10. Em nenhuma hipótese são fornecidas informações pessoais para terceiros não relacionados à prestação dos serviços, objeto do presente instrumento, salvo mediante autorização do ASSINANTE.</p>

                        <h2>6. Serviço de Atendimento ao ASSINANTE</h2>
                        <p>6.1 O FAIXA ROSA disponibiliza ao ASSINANTE Serviço de Atendimento e coloca à disposição através do email contato@faixarosa.com.br</p>

                        <h2>7. Prazo</h2>
                        <p>7.1 Este instrumento é celebrado pelo prazo de até 30 dias, conforme opção do ASSINANTE no site do FAIXA ROSA, sendo prorrogado por períodos iguais, por meio da renovação facilitada, conforme procedimento previsto no próximo item.</p>

                        <h2>8. Procedimento de Renovação</h2>
                        <p>8.1 O FAIXA ROSA adota o procedimento de renovação programada da assinatura, dirigido exclusivamente ao ASSINANTE, assegurando facilidade e agilidade na renovação.</p>
                        <p>8.2 Se acaso não for do interesse do ASSINANTE a renovação de sua assinatura, basta que o mesmo responda ou entre em contato com o Serviço de Atendimento ao Cliente do FAIXA ROSA através do email contato@faixarosa.com.br</p>

                        <h2>9. Cancelamento</h2>
                        <p>9.1 O FAIXA ROSA assegura ao ASSINANTE a possibilidade de cancelamento do presente instrumento a qualquer tempo, mediante aviso prévio por parte do ASSINANTE, e respeitando o previsto nos termos de uso da plataforma.</p>

                        <h2>10. Rescisão</h2>
                        <p>10.1 A assinatura poderá ser cancelada e o presente instrumento rescindido na hipótese de infração contratual, caso a parte infratora não corrija o inadimplemento, após notificação.</p>
                        <p>10.2 Caso o ASSINANTE não pague o valor devido no prazo estipulado em notificação a ser enviada pelo FAIXA ROSA, o presente instrumento poderá ser rescindido com a imediata suspensão da entrega dos Produtos/Serviços.</p>

                        <h2>11. Alterações dos Termos e Condições</h2>
                        <p>11.1 Quaisquer alterações que impactem em ônus financeiro ao ASSINANTE, serão feitas mediante comunicação prévia ao mesmo, que poderá manifestar a sua concordância, por qualquer meio disponível, renegociar tais alterações ou qualquer das partes poderá denunciá-lo, caso não cheguem a um acordo.</p>

                        <h2>12. Foro</h2>
                        <p>12.1 Fica assegurado ao ASSINANTE o direito, caso necessário, de recorrer ao Foro da Comarca de São Paulo/SP, para quaisquer dúvidas e questões oriundas deste instrumento.</p>

                        <h2>Última atualização: 13 de MAIO de 2024</h2>
                    </div>
                </>)}
            </div>
        </div>
    );
}

export default Terms;