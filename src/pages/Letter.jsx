// Import Style Page
import './Letter.css';

// Import React Icons
import { BsBalloonHeartFill } from "react-icons/bs";

const Letter = () => {
    return (
        <>
            <div className="Letter">
                <h1>A Nossa Vida</h1>
                <p className="heart"><BsBalloonHeartFill /></p>

                <div className="letterContent">
                    <p style={{ marginBottom: '32px' }}>Ju, meu amor,</p>

                    <p>Dois anos! Eu te amo tanto que sinto que as palavras nunca serão suficientes para expressar o tamanho desse sentimento. Eu espero, do fundo do meu coração, que eu consiga demonstrar o tanto que você é importante na minha vida.</p>

                    <p>Você alegra os meus dias de uma forma que eu não sabia que era possível. Eu te adoro por inteiro, o seu sorriso, a sua carinha de brava, os seus olhos, a sua voz, o seu cabelo, o seu jeito de ser, as suas piadas, até mesmo as que você acha que são sem graça.</p>

                    <p>Eu já disse isso antes mas uma coisa que sempre enche o meu coração de amor, é ver você toda felizinha vindo na minha direção quando a gente se encontra. É uma coisa simples que vale muito. Você é sempre tão atenciosa e me trata com um carinho que me faz sentir extremamente sortudo.</p>

                    <p>Eu não sei explicar como, mas sinto que ficar junto de você é a melhor coisa do mundo. A sua presença já me faz feliz. Minhas memórias favoritas são aquelas em que estamos apenas nós dois, abraçados, conversando ou quietinhos porque a sua companhia é o meu lugar favorito no mundo.</p>

                    <p>Nesses dois anos, você me ensinou que o amor é constante, ele é conforto e ele é carinho. Ficar junto de você me mostrou que a vida consegue ser ainda mais colorida. Julia, para mim, é sinônimo disso e muito mais, um amor sem precedentes.</p>

                    <p>Uma coisa que sempre vai me marcar foi o início do nosso namoro, com você indo àquela festa só porque eu ia, e depois me pedindo em namoro de um jeito tão natural, só mostra como você sempre foi essa pessoa maravilhosa que gostava de mim pelo que eu sou.</p>

                    <p>E hoje, eu não vejo a hora de ter nosso cantinho para a gente poder viver juntinhos, com a gente se implicando e se amando todos os dias. Eu sei que você tem questões com viagens, mas eu adoraria fazer várias com você, conhecer lugares novos. O mundo inteiro merece ver você e você merece ver o mundo.</p>

                    <p>Eu te amo muito, meu amor, mais do que eu conseguiria colocar em palavras ou sequer demonstrar. Eu te amo com tudo o que eu sou.</p>

                    <p>Feliz e felizes foram os dois anos!</p>

                    <p style={{ marginTop: '32px' }}>Com todo o meu amor,</p>
                    <p>Eduardo/Edu/Dudu</p>
                </div>

                <div className="final">
                    <p className="loveu">Eu te amo! <span>&#10084;</span></p>
                </div>
            </div>
        </>
    );
};

export default Letter;