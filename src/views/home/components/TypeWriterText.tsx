import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 4rem;
    text-transform: capitalize;
    width: 80%;
    color: '#202020';
    text-align: center;

    span {
        font-family: 'Gill Sans Extrabold', sans-serif;
        font-weight: 900;
    }

    .text-1 {
        color: green;
    }

    .text-2 {
        color: purple;
    }

    .text-3 {
        color: white;
    }

    @media (max-width: 70em) {
        font-size: 2rem;
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
        font-size: 2rem;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

// const SubTitle1 = styled.h3`
//     font-size: 1.25em;
//     color: '#00000';
//     font-weight: 600;
//     margin-bottom: 1rem;
//     width: 100%;
//     text-align: center;

//     @media (max-width: 40em) {
//         font-size: 2rem;
//     }

//     @media (max-width: 48em) {
//         align-self: center;
//         text-align: center;
//     }
// `;


const TypeWriterText = () => {
    return (
        <>
            <Title>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={typewriter => {
                        typewriter
                            .typeString("<span class='text-1'>CREATE</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("<span class='text-2'>DISCOVER</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("<span class='text-3'>EXPLORE</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Title>
        </>
    );
};

export default TypeWriterText;
