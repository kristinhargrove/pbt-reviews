import styled from "styled-components";


export default function Tournament(props) {
  const { name, state } = props;

  // const exploreLink = `/${type}/${id}`;

  // Change the image to instead be the bounty reward amount with a dark background and light text

  return (
    <Item>
      <Content>
        <h3>{name}</h3>
      </Content>
    </Item>
  );
}

const Item = styled.li`
  
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// const ItemImg = styled(Image)`
//   object-fit: cover;
// `;

const Content = styled.div`
  width: 100%;

  text-align: center;

  @media (min-width: 768px) {
    width: 90%;
    padding: 0;
    text-align: left;
  }
`;

const ContentHeader = styled.h2`
  margin: 0.5rem 0;
  padding-right: 16px;

  @media (min-width: 768px) {
    margin: 1rem 0;
    padding-right: 16px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 0.5rem;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Time = styled.time`
  color: #666666;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;