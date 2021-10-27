import styled from "styled-components";

export const Container = styled.main`
<<<<<<< HEAD
  background: ${props => props.theme.content};
=======
  background: #1f2a48;
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
  width: 680px;
  height: auto;
  border: none;
  border-radius: 10px;

  .content-container {
    display: flex;
  }
  
  img {
        border: none;
        border-radius: 50%;
        padding: 30px;
      }

  .content-section-1 {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    
    .created-at {
        font-size: 12px;
        color: #667088;
        position: absolute;
        right: 435px;
       }
  }

  .login-line {
    font-style: italic;
    font-size: 12px;
    color: #0179ff;
    margin-top: 5px;
    margin-bottom: 30px;
      }

  .bio-line {
    color: #5c667f;
    font-size: 12px;
    margin-bottom: 30px;
  }

  .content-section-2 {
    display: flex;
    font-size: 12px;
    margin-bottom: 30px;

    height: 70px;
    width: 430px;
<<<<<<< HEAD
    background: ${props => props.theme.body};
=======
    background: #131c2f;
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
    align-items: center;
    border: none;
    border-radius: 10px;

    span{
      font-size: 16px;
    }

    p:first-child {
      margin-left: 20px;
    }

    p {
      margin-right: 80px;
    }
  }

  .content-section-3 {
    display: grid;
    grid-template-columns: 200px 140px;
    grid-column-gap: 80px;
    grid-row-gap: 15px;
    margin-bottom: 30px;
    font-size: 12px;

    span {
      position: absolute;
      margin-left: 10px;
    }

    .not-available {
      opacity: 0.2;
    }
    
    }
  

`;

