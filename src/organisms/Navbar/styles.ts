import styled from 'styled-components'

function template(i: number, duration: number) {
    return `
        &:nth-child(${i + 1}) {
            background: rgba(255, 255, 255, 0.2);
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
            padding: 0 30px 0 30px;
         }
      `;
}

function getAnimations() {
    let str = '';
    for (let index = 0; index < 4; index += 1) {
        str += template(index, index)
    }
    return str;
}

export const Navbar = styled.nav`
    background: transparent;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
    margin: 20px 0 20px 0;
    transition: all ease 0.3s;

    &.active {
        ${getAnimations()}
  }
`;

export const Sub = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
