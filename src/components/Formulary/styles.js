import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    margin-bottom: 20px;
    
    display: flex;
    justify-content: center;
    
    position: relative;

    input[type="text"] {
      padding: 5px 15px 5px 50px;
      width: 680px;
      line-height: 45px;
      
      border: none;
      border-radius: 10px;
      
<<<<<<< HEAD
      background: ${props => props.theme.content};
      font-size: 18px;
      font-family: 'Noto Sans Mono', monospace;

      :focus {
        outline: none;
      }

=======
      background: #1f2a48;
      font-size: 18px;
      font-family: 'Noto Sans Mono', monospace;

>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
      ::placeholder {
        color: #667088;
      }
    }

    svg {
      display: flex;
      align-items: center;
      justify-content: center;

      background: transparent;
      font-size: 25px;

      position: absolute;
      height: 100%;
      margin-left: 15px;
    }

    button {
      padding: 0 15px;

      position: absolute;
      top: 6px;
      bottom: 6px;
      right: 15px;

      border: none;
      border-radius: 5px;
      
      background: #0179ff;
<<<<<<< HEAD
      color: #fff;
=======
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
      font-family: 'Noto Sans Mono', monospace;
      font-size: 14px;
}
    
`;