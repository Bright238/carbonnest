import { ActivityStatusType } from '@app/interfaces/interfaces';

export interface Activity {
  image: string;
  title: string;
  status: ActivityStatusType;
  date: number;
  owner: string;
}

export interface UserActivity extends Omit<Activity, 'owner'> {
  usd_value: number;
}

export interface TrendingActivity {
  title: string;
  owner: string;
  image: string;
  avatar: string;
  usd_value: number;
}

export const getUserActivities = (): Promise<UserActivity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        // {
        //   image: "https://media.istockphoto.com/id/543185364/photo/young-african-male-and-adult-african-woman-working-in-garden.jpg?s=2048x2048&w=is&k=20&c=Q9xITl02yzDAFEgyYrIe_6LQx-o01ghN6ERXnDjJdEw=",  // Updated image URL
        //   title: 'Project: Reducing Soil Degradation by Bright Mafungatusi',
        //   status: 'sold',
        //   date: Date.now() - 1000 * 60 * 60 * 24 * 5,
        //   usd_value: 240,
        // },        
        // {
        //   image: 'https://unsplash.com/photos/woman-carrying-toddler-at-back-while-planting-2INKkSrEmc8',  // Updated image URL
        //   title: 'Ancient Nature: Combatting Deforestation by Chileshe Bwalya',
        //   status: 'added',
        //   date: Date.now() - 1000 * 60 * 60 * 24 * 22,
        //   usd_value: 1360,
        // },
        // {
        //   image: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/unsplash_t55GeRpETn0_s8myd3.webp',
        //   title: 'Project: Mitigating Climate Change Effects by Lwando Nkhoma',
        //   status: 'booked',
        //   date: Date.now() - 1000 * 60 * 60 * 24 * 156,
        //   usd_value: 1895,
        // },
        // {
        //   image: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/unsplash_geJHvrH-CgA_n6mmkv.webp',
        //   title: 'Project: Reducing Agricultural Waste by Maria Zulu',
        //   status: 'sold',
        //   date: Date.now() - 1000 * 60 * 60 * 24 * 31,
        //   usd_value: 3920,
        // },
      ]);
    }, 0);
  });
};

export const getActivities = (): Promise<Activity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/unsplash_d2w-_1LJioQ_urzhuj.webp',
          title: 'Project: Combatting Soil Erosion by Bright Mafungatusi',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 24,
          owner: 'Bright Mafungatusi',
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/unsplash_1rBg5YSi00c_1_mpz3a7.webp',
          title: 'Project: Mitigating Air Pollution by Chileshe Bwalya',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 2,
          owner: 'Chileshe Bwalya',
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/unsplash_GfQEdpIkkuw_vid9mb.webp',
          title: 'Project: Restoring Fertility with Biochar by Lwando Nkhoma',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 22,
          owner: 'Lwando Nkhoma',
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/unsplash_3MAmj1ZKSZA_rfbw6u.webp',
          title: 'Project: Fighting Land Degradation by Maria Zulu',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 8,
          owner: 'Maria Zulu',
        },
      ]);
    }, 1000);
  });
};

export const getTrendingActivities = (): Promise<TrendingActivity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          title: 'Project: Mitigating Desertification by Kangwa Chisanga',
          owner: 'Kangwa Chisanga',
          image: 'https://media.istockphoto.com/id/1320902767/photo/african-american-farm-worker-with-cabbage-during-harvest.jpg?s=612x612&w=0&k=20&c=f-HmhIccAIR-UgYhtYiyDGXCvJ1MC7zYzRgH-VdgaXY=',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/unsplash_nR-rzu8--5M_qwhnht.webp',
          usd_value: 1350,
        },
        {
          title: 'Project: Combating Pollution with Biochar by Chola Mumba',
          owner: 'Chola Mumba',
          image: 'https://media.istockphoto.com/id/543078858/photo/young-african-male-and-adult-african-woman-working-in-garden.jpg?s=612x612&w=0&k=20&c=gqtI-FT-j-ZS31W1wqGY8JesdvZdoU31aLtGO0SXy-k=',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/salvatore-andrea-santacroce-wGICoyAhEs4-unsplash_dfo8do.webp',
          usd_value: 1420,
        },
        {
          image: "https://media.istockphoto.com/id/1163704491/photo/male-gardener-working-at-homestead.jpg?s=612x612&w=0&k=20&c=KbKnAQC1RpA8x9c3Na52h7sHKxXafu0Qgxn4EsxmhO0=",
          title: 'Project: Reducing Soil Degradation by Bright Mafungatusi',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          owner: 'Bright Mafungatusi',
          usd_value: 200,
        },
        {
          title: 'Project: Revitalizing Land for Future Generations by Mwila Kamanga',
          owner: 'Mwila Kamanga',
          image: 'https://media.istockphoto.com/id/884811620/photo/happy-to-grow-organic.jpg?s=612x612&w=0&k=20&c=7YQ-qAUa9KwTzw7q_ZPZHurTc5t4cA91lknlspKfEG8=',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          usd_value: 1120,
        },
        {
          title: 'Project: Enhancing Agricultural Productivity by Luyando Zulu',
          owner: 'Luyando Zulu',
          image: 'https://media.istockphoto.com/id/1423749111/photo/farmer-carrying-box-with-picked-red-komatsuna.jpg?s=612x612&w=0&k=20&c=6x02v27g-q4jd3_1S2grdyFMJyTM_myb9Xbwf7tKFm0=',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          usd_value: 980,
        },
        {
          title: 'Project: Regenerative Farming Practices by Mathews Lungu',
          owner: 'Mathews Lungu',
          image: 'https://media.istockphoto.com/id/2166572678/photo/farmers-harvesting-vegetables-at-farm-against-sky.jpg?s=612x612&w=0&k=20&c=L_A6cQ-Jh4qDVWk1wql_LMjuMmuSMQvYUgp-NcM2-lQ=',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          usd_value: 1200,
        },
        {
          image: 'https://images.pexels.com/photos/10963690/pexels-photo-10963690.jpeg?auto=compress&cs=tinysrgb&w=600', 
          title: 'Ancient Nature: Combatting Deforestation by Chileshe Bwalya',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          owner: 'Chileshe Bwalya',
          usd_value: 1650,
        },
        {
          title: 'Project: Building Resilient Ecosystems by Chishala Banda',
          owner: 'Chishala Banda',
          image: 'https://media.istockphoto.com/id/1146316467/photo/male-harvesting-cauliflowers.jpg?s=612x612&w=0&k=20&c=wsOzjRmtxfpp_ao6kvwMJCIkstpQmGhPuB1jkUGjnns=',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          usd_value: 1225,
        },
        {
          title: 'Project: Diversifying Agriculture for Sustainability by Fwamba Chibwe',
          owner: 'Fwamba Chibwe',
          image: 'https://media.istockphoto.com/id/1322340147/photo/young-african-man-working-for-organic-farm-while-holding-fresh-vegetable-wood-box-and-smiling.jpg?s=612x612&w=0&k=20&c=GuQD_e8GCNnNyhvNokOjCla-hyTwAe6H-DjHRGKCXJw=',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/ACHIEVE - MIS PMP-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          usd_value: 1050,
        },
      ]);
    }, 0);
  });
};
