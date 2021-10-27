import { useUser } from '../../hooks/useUser';
import { Container } from './styles';

import { ObjectIsEmpty } from '../../util/ObjectIsEmpty';
import { FormatDate } from '../../util/FormatDate';
import { FormatInfoApi } from '../../util/FormatInfoApi';

import { MdOutlineLocationOn } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';



export function MainContent() {
  const { users } = useUser();
  const date = new Date(users.created_at);
  console.log(users);

  
  return(
    <>
   { ObjectIsEmpty(users) ? 
    <Container>
        <div className="content-container">
          <div>
            <img src={users.avatar_url} alt={users.name} width="200px"/>
          </div>
          <div>
            <div className="content-section-1">
              <h3>{users.name}</h3>
              <p className="created-at">Joined {FormatDate(date)}</p>
            </div>
            <p className="login-line">@{users.login}</p>
            <p className="bio-line">{!users.bio ? 'This profile has no bio' : users.bio}</p>
        
        <div className="content-section-2">
          <p>Repos    <br /> <span>{users.public_repos}</span></p>
          <p>Followers<br /> <span>{users.followers}</span></p>
          <p>Following<br /> <span>{users.following}</span></p>
        </div>

        <div className="content-section-3">
          {FormatInfoApi(users.location, MdOutlineLocationOn)}
          {!users.twitter_username ? FormatInfoApi(users.twitter_username, FiTwitter) : <a href={` https://twitter.com/${users.twitter_username}`}>{FormatInfoApi(users.twitter_username, FiTwitter)}</a>}
          {!users.blog ? FormatInfoApi(users.blog, BsLink45Deg) : <a href={users.blog}>{FormatInfoApi(users.blog, BsLink45Deg)}</a>}
          {FormatInfoApi(users.company, BiBuildings)}
        </div>

        </div>
        </div>
    </Container>
    : ''
        }
        </>
  );
}
