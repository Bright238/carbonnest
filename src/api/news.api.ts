import { newsTags } from 'constants/newsTags';
import { IHashTag } from '@app/components/common/BaseHashTag/BaseHashTag';

const avatar1 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar1.webp';
const avatar2 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar2.webp';
const avatar3 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar3.webp';
const avatar4 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar4.webp';

export interface Post {
  avatarUrl: string;
  author: string;
  title: string;
  date: number;
  text: string;
  img: string;
  tags: Array<IHashTag>;
}

const { arts, music, health } = newsTags;

export const getNews = (): Promise<Post[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          avatarUrl: avatar1,
          author: 'Dr. Dan Reed',
          title: 'Project: Mitigating Desertification by Kangwa Chisanga',
          date: 1576789200000,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus mauris ac mi efficitur, eu venenatis metus mattis. Aenean sit amet imperdiet dui. Sed vel lacinia tellus, vel ornare leo. Duis massa turpis, bibendum nec consectetur non, imperdiet vitae est. Aenean vestibulum non dui in vehicula. Fusce ex velit, iaculis in urna sit amet, congue fringilla orci. Phasellus vitae augue justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt lobortis est sit amet porta.',
          img: 'https://media.istockphoto.com/id/1320902767/photo/african-american-farm-worker-with-cabbage-during-harvest.jpg?s=612x612&w=0&k=20&c=f-HmhIccAIR-UgYhtYiyDGXCvJ1MC7zYzRgH-VdgaXY=',
          tags: [arts],
        },
        {
          avatarUrl: avatar2,
          author: 'Jordan Howard',
          title: 'Project: Combating Pollution with Biochar by Chola Mumba',
          date: 1575925200000,
          text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed sodales erat. Fusce lobortis, dolor vel porttitor porttitor, ipsum lorem pulvinar nunc, ac vestibulum est risus vel turpis. Vestibulum et vestibulum est, vitae placerat lectus. Maecenas arcu sem, congue id metus non, ultricies egestas purus. Integer ut sagittis eros, in posuere arcu. Integer malesuada sapien libero, iaculis hendrerit enim egestas sit amet. In sed sapien in lorem pulvinar sollicitudin. In hendrerit magna felis, vitae fringilla magna imperdiet sed. Nam urna est, feugiat vitae odio tincidunt, lobortis auctor eros. Sed dapibus, nunc eu posuere porta, lectus tellus ornare velit, eu congue orci diam ac lorem. Integer lorem purus, dictum et aliquet finibus, consequat ac metus. Mauris tempor mattis mattis. Ut a porttitor urna. Nullam congue imperdiet tincidunt.',
          img: 'https://media.istockphoto.com/id/543078858/photo/young-african-male-and-adult-african-woman-working-in-garden.jpg?s=612x612&w=0&k=20&c=gqtI-FT-j-ZS31W1wqGY8JesdvZdoU31aLtGO0SXy-k=',
          tags: [arts, health],
        },
        {
          avatarUrl: avatar3,
          author: 'Jack Hannah',
          title: 'Project: Reducing Soil Degradation by Bright Mafungatusi',
          date: 1575147600000,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum luctus bibendum tempus. Curabitur lacinia justo vitae egestas aliquet. Morbi convallis congue felis, eu pulvinar nulla finibus in. Praesent imperdiet velit nibh, consectetur varius ipsum mattis non. Maecenas dictum, nunc at vestibulum pulvinar, velit ipsum sodales ex, id vehicula felis velit ut quam. Curabitur vulputate commodo sapien ac facilisis. Praesent erat eros, porta ut faucibus eget, rhoncus quis nisi. Suspendisse potenti. Sed rhoncus, ex eu condimentum finibus, lacus ex bibendum orci, sit amet volutpat lacus lacus sit amet lorem. Donec laoreet eros at mollis tincidunt. Maecenas lectus velit, efficitur non dictum sed, fringilla ut lacus. In at placerat lorem, quis elementum dui. Cras urna nisi, luctus ut urna id, placerat eleifend tellus. Donec tempor purus est, non dictum nibh suscipit non.',
          img: "https://media.istockphoto.com/id/1163704491/photo/male-gardener-working-at-homestead.jpg?s=612x612&w=0&k=20&c=KbKnAQC1RpA8x9c3Na52h7sHKxXafu0Qgxn4EsxmhO0=",
          tags: [health],
        },
        {
          avatarUrl: avatar4,
          title: 'Project: Revitalizing Land for Future Generations by Mwila Kamanga',
          author: 'Colin Falls',
          date: 1572555600000,
          text: 'Integer a nisl nisl. Cras lobortis, velit vitae vulputate mollis, sem est gravida nisl, in dapibus tellus lacus quis elit. Sed non tellus facilisis, lobortis purus a, auctor lorem. Donec maximus volutpat odio, ut vulputate mi porta eget. Donec ac interdum massa, non maximus ipsum. Etiam porttitor a turpis nec ultricies. Etiam porttitor dui non leo lobortis aliquet.',
          img: 'https://media.istockphoto.com/id/884811620/photo/happy-to-grow-organic.jpg?s=612x612&w=0&k=20&c=7YQ-qAUa9KwTzw7q_ZPZHurTc5t4cA91lknlspKfEG8=',
          tags: [music, health],
        },
        {
          avatarUrl: avatar1,
          author: 'Dr. Dan Reed',
          title: 'Project: Enhancing Agricultural Productivity by Luyando Zulu',
          date: 1569877200000,
          text: 'Mauris non fermentum justo. Ut iaculis lacinia faucibus. Pellentesque nec leo id ligula ultrices lacinia in sit amet mi. Nullam magna tortor, ultrices et pretium sed, finibus in nisi. Suspendisse finibus quam eu justo fermentum volutpat. Aenean at molestie ligula. Pellentesque egestas luctus feugiat. Sed auctor convallis orci sit amet dictum. Nulla semper faucibus arcu ut sodales. Aenean ut eros sed nulla posuere imperdiet nec vitae quam. Nunc tincidunt faucibus enim. Ut pharetra malesuada lacus in faucibus.',
          img: 'https://media.istockphoto.com/id/1423749111/photo/farmer-carrying-box-with-picked-red-komatsuna.jpg?s=612x612&w=0&k=20&c=6x02v27g-q4jd3_1S2grdyFMJyTM_myb9Xbwf7tKFm0=',
          tags: [arts],
        },
        {
          avatarUrl: avatar2,
          author: 'Jordan Howard',
          title: 'Project: Regenerative Farming Practices by Mathews Lungu',
          date: 1567285200000,
          text: 'Phasellus dapibus massa at felis vehicula, id dictum leo eleifend. Vivamus luctus felis semper arcu tempus pretium. Aliquam erat volutpat. Proin venenatis cursus nisl, vel dapibus felis imperdiet sed. Nam ac suscipit justo. Nullam et rutrum ante. Nam at orci et mi scelerisque sagittis a eget mauris.',
          img: 'https://media.istockphoto.com/id/2166572678/photo/farmers-harvesting-vegetables-at-farm-against-sky.jpg?s=612x612&w=0&k=20&c=L_A6cQ-Jh4qDVWk1wql_LMjuMmuSMQvYUgp-NcM2-lQ=',
          tags: [arts],
        },
        {
          avatarUrl: avatar3,
          author: 'Jack Hannah',
          title: 'Project: Combatting Deforestation by Chileshe Bwalya',
          date: 1564606800000,
          text: 'In sem sapien, auctor non diam vel, tincidunt ornare mi. Mauris urna leo, aliquet id justo vitae, malesuada varius massa. Sed sodales, ligula ac congue luctus, purus justo commodo sapien, vel mollis mauris turpis vel est. In ut sem dignissim, congue ante et, facilisis ante. Pellentesque dignissim enim a est bibendum mollis. Vestibulum suscipit eu lacus eget venenatis. Duis eu metus eleifend, elementum lorem eu, semper tellus. Cras euismod risus a lobortis tincidunt.',
          img: 'https://images.pexels.com/photos/10963690/pexels-photo-10963690.jpeg?auto=compress&cs=tinysrgb&w=600', 
          tags: [arts, health],
        },
        {
          avatarUrl: avatar4,
          author: 'Colin Falls',
          title: 'Project: Building Resilient Ecosystems by Chishala Banda',
          date: 1561928400000,
          text: 'Pellentesque tempor sem a dictum dignissim. Vestibulum dapibus et est vehicula posuere. Sed pretium sem eget massa porta sollicitudin. Duis malesuada neque lorem, sit amet molestie tortor volutpat nec. Sed et rhoncus lacus, ut eleifend nibh. Aliquam euismod justo eu euismod pretium. Etiam rhoncus sapien vitae justo porttitor lobortis. Pellentesque vitae vehicula nibh, nec tristique leo. Praesent in orci sapien. Duis nisi risus, commodo pulvinar vulputate sollicitudin, viverra ac metus.',
          img: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
          tags: [arts, music],
        },
        {
          avatarUrl: avatar2,
          author: 'Jordan Howard',
          title: 'Project: Diversifying Agriculture for Sustainability by Fwamba Chibwe',
          date: 1559336400000,
          text: 'Morbi et mauris quis nibh congue rutrum id eget leo. Integer venenatis sollicitudin nisl vitae ornare. Integer ullamcorper sapien eu justo porttitor tincidunt id nec elit. Aliquam sollicitudin, quam at convallis consectetur, lectus mauris euismod sapien, vel porttitor dolor velit quis lorem. Nunc elementum, ante id vulputate consectetur, erat sem rutrum odio, eget laoreet nunc lorem ut metus. Maecenas aliquet, tellus et dapibus viverra, mauris turpis mollis lorem, quis dignissim ante nibh id tortor. Nullam hendrerit, ipsum sit amet molestie mattis, enim sapien cursus elit, ut gravida massa arcu sed ex.',
          img: 'https://media.istockphoto.com/id/1146316467/photo/male-harvesting-cauliflowers.jpg?s=612x612&w=0&k=20&c=wsOzjRmtxfpp_ao6kvwMJCIkstpQmGhPuB1jkUGjnns=',
          tags: [arts, music],
        },
        {
          avatarUrl: avatar4,
          author: 'Colin Falls',
          title: 'Nunc semper mauris magna',
          date: 1556658000000,
          text: 'Integer faucibus arcu in risus molestie commodo. Fusce vitae turpis tempus, dapibus enim a, rhoncus odio. In semper enim et dolor sollicitudin, viverra facilisis justo egestas. Aenean orci risus, malesuada ac tincidunt ultricies, egestas vitae mi. Praesent eget quam venenatis, dictum massa sit amet, dignissim lorem. Sed mauris purus, imperdiet quis feugiat in, egestas ut est. Nullam et turpis sit amet nibh iaculis mattis vitae eu risus. Morbi in eleifend augue, id aliquam erat. Etiam feugiat blandit diam, at porttitor mi lobortis ut. Donec finibus sagittis sem, at tincidunt lacus interdum vel. Nunc eget auctor sapien. Nulla luctus vestibulum accumsan. Mauris feugiat id lorem eu porta.',
          img: 'https://media.istockphoto.com/id/1322340147/photo/young-african-man-working-for-organic-farm-while-holding-fresh-vegetable-wood-box-and-smiling.jpg?s=612x612&w=0&k=20&c=GuQD_e8GCNnNyhvNokOjCla-hyTwAe6H-DjHRGKCXJw=',
          tags: [arts, music],
        },
      ]);
    }, 1000);
  });
};
