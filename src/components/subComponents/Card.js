import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.li)`
  width: 22rem;
  height: 45vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 1.5rem 2rem;
  list-style-type: none;
  border-radius: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.text};
  transition: all .2s ease;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }

  
`

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: calc(1em + .7vw);
`

const Description = styled.h3`
  font-size: calc(.8em + .4vw);
  font-weight: 400;
`

const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: .5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover &{
    border-top: 2px solid ${props => props.theme.text};
  }
`

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(.8em + .2vw);
`

const Footer = styled.footer`
  font-family: 'Philosopher';
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: .5rem 2rem;
  border-radius: 0 0 0 50px;
  font-size: calc(.8em + .3vw);
  text-align: end;

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`

const Github = styled.a`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: .5rem 2rem;
  border-radius: 0 50px 0 0;
  font-size: calc(.8em + .3vw);

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`

const item = {
  hidden: { scale: 0},
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const Card = (props) => {
  
  const { id, name, description, tags, demo, github } = props.data;
  
  return (
    <Box key={id} variants={item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {
          tags.map(tag => {
            return <Tag key={id * Math.random()}>#{tag}</Tag>
          })
        }
      </Tags>
      <Footer>
        <Link href={demo} target='_blank'>Live</Link>
        <Github href={github} target='_blank'>GitHub</Github>
      </Footer>
    </Box>
  )
}
export default Card