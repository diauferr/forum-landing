import styled from 'styled-components'

function template(i: number, duration: number) {
    return `
        &:nth-child(${i + 1}) {
            background: rgba(255, 255, 255, 0.2);
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
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
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    margin: 20px 0 20px 0;
    transition: all ease 0.5s;
    z-index: 100;

    &.active {
        height: 68px;
        ${getAnimations()}
  }
`;

export const Sub = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
