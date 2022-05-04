
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PowerBtn } from '../AllSVGs';

const PowerButton = () => {  

  const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: ${props => props.theme.body};
    border-radius: 50%;
    border: 1px solid #000;
    padding: .25rem .1rem .1rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.hoverColor};
      box-shadow: 0 0 8px 6px ${props => props.theme.hoverShadow};
    }

    &>*:first-child {
      color: inherit;
    }
  `

  return (
    <Power>
      <Link to='/'>
        <PowerBtn fill='currentColor' />
      </Link>
    </Power>
  )
}

export default PowerButton