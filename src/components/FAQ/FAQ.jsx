import Script from "./Script";

function FAQ() {
    return (
        <div>
            <h2>Perguntas Frequentes</h2>
            <div className="accordion">
            <h3>Como faço meu Cadastro?</h3>
            <div className="content">
                <p>
                Preenchendo o formulário para cadastro com seus dados ou pode também se
                conectar com suas redes sociais.
                </p>
                </div>
            </div>
            <div className="accordion">
            <h3>Como criar uma Playlist?</h3>
            <div className="content">
                <p>
                De forma bem simplificada, na música que está sendo reproduzida existe o
                icone de adicionar + clique em cima que será redirecionado a Playlist que
                você escolher.
                </p>
                </div>
            </div>
            <div className="accordion">
            <h3>Quais os tipos de Planos?</h3>
            <div className="content">
                <p>
                São os Planos: TocaPlay Gold com todas funcionalidades liberadas, TocaPlay
                Family pra toda sua família curti o melhor das atualidades da música ou
                TocaPlay PRO para utilização profissional podendo fazer playback ou VS.
                </p>
                </div>
            </div>
            <div className="accordion">
            <h3>O que é o TocaPlay?</h3>
            <div className="content">
                <p>
                É um serviço digital que dá acesso instantâneo a milhões de músicas,
                podcasts, vídeos e outros conteúdos de criadores no mundo todo e está
                disponível para vários dispositivos, incluindo computadores, celulares,
                tablets, TVs e carros.
                </p>
                </div>
            </div>
            <div className="accordion">
            <h3>Posso ouvir as músicas offline no TocaPlay?</h3>
            <div className="content">
                <p>
                Dependendo do Plano adquirido o usuário pode baixar as músicas preferidas
                para um armazenamento próprio para ouvir offline na plataforma TocaPlay.
                </p>
                </div>
            </div>

    <Script />

        </div>
    );
}

export default FAQ;