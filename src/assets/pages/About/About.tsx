import { Title } from '../../components/Title/Title';
import style from './about.module.scss';

export function About() {
  return (
    <>
      <Title text={'Om os'} />
      <figure className={style.aboutFigureStyle}>
        <figcaption>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab iusto quod dolore sit non similique! Vitae,
            molestiae delectus culpa nemo ad quidem totam ab magnam. Labore nihil ea ratione!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi adipisci a beatae quos, eveniet eligendi
            deleniti, quod iusto voluptas dolorum natus placeat vel vitae minima id! Magnam consequatur fugiat
            architecto!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam unde culpa. Sunt eius saepe
            repudiandae iure excepturi incidunt perspiciatis, libero suscipit esse eaque at a itaque veniam. Temporibus,
            at?
          </p>
          <p>
            Wewum ipsum dowow sit amet, consectetuw adipiscwing ewit, sed do eiusmod tempow incididunt ut wabowe et
            dowowe magna awiqua. Ut enim ad minim veniam, quis nostwud exewcitation uwamco wabowwis nisi ut awiquip ex
            ea commodo consequat. Duwis aute iwuwe wepwendewit in vowuptate vewit esse ciwwum dowowe eu fugiat nuwwa
            pawiatuw. Excepteuw sint occaecat cupidatat non pwoident, sunt in cuwpa qui officia desewunt mowwit anim id
            est wabowum.
          </p>
        </figcaption>
        <img src="/grafik-2/images/300px-Unsettled_Tom.jpg" alt="" />
      </figure>
    </>
  );
}
