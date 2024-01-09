import styled from 'styled-components';
import { FiUploadCloud } from 'react-icons/fi'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'

export const UploadIcon = styled(FiUploadCloud)`
    font-size: 3em;
    color: #053;
`;
export const CheckIcon = styled(GiCheckMark)`
    font-size: 3em;
    color: #053;

    animation: 1s ease up;

    @keyframes up {
        0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: translateY(-45px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-in;
		transform: translateY(-24px);
	}

	65% {
		animation-timing-function: ease-in;
		transform: translateY(-12px);
	}

	82% {
		animation-timing-function: ease-in;
		transform: translateY(-6px);
	}

	93% {
		animation-timing-function: ease-in;
		transform: translateY(-4px);
	}

	25%,
	55%,
	75%,
	87% {
		animation-timing-function: ease-out;
		transform: translateY(0px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0px);
	}
        
    }

`;
export const DocIcon = styled(IoDocumentTextSharp)`
    font-size: 2em;
    color: #053;
`;