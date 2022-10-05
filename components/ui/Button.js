import Link from "next/link";
import styled from "styled-components";

export default function Button(props) {
  const { link, href, isRed, customColor } = props;

  console.log("button here");
  console.log(customColor);

  if (link) {
    return (
      <Link href={link}>
        <StyledLink color={customColor}>{props.children}</StyledLink>
      </Link>
    );
  }

  if (href) {
    return (
      <StyledLink color={customColor} href={href} target="_blank">
        {props.children}
      </StyledLink>
    );
  }

  return (
    <StyledButton color={customColor} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font: inherit;
  background-color: #03be9f;
  border: 1px solid #03be9f;
  border-radius: 6px;
  color: #dafff7;
  padding: 0.5rem 1.5rem;
  text-align: center;
  margin-left: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #02afa1;
    border-color: #02afa1;
  }

  ${({ color }) =>
    color === "#C90C04" &&
    `
    background-color: #C90C04;
    border-color: #C90C04;
    color: #FFDCDA;

    &:hover {
      background-color: #B50800;
      border-color: #B50800;
    }
  `}
`;

const StyledButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  font: inherit;
  background-color: #03be9f;
  border: 1px solid #03be9f;
  border-radius: 6px;
  color: #dafff7;
  padding: 0.5rem 1.5rem;
  text-align: center;
  margin-left: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #02afa1;
    border-color: #02afa1;
  }

  ${({ color }) =>
    color === "#C90C04" &&
    `
    background-color: ${color};
    border-color: ${color};
    color: #FFDCDA;

    &:hover {
      background-color: #B50800;
      border-color: #B50800;
    }
  `}

  ${({ color }) =>
    color === "#fff" &&
    `
    background-color: ${color};
    border-color: #ddd;
    color: #000;

    &:hover {
      background-color: #eee;
      border-color: #ccc;
    }
  `}
`;
