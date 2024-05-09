import { axiosValid_API } from '@/api/common/axios_instance';
import useAuthStore from '@/store/auth/auth-store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { create } from 'zustand';
import GalleryList from './GalleryList';
import { I_GalleryData } from './type/gallery';

interface I_GalleryDataState {
  galleries: I_GalleryData[];
  setGalleries: (galleries: I_GalleryData[]) => void;
}
export const useGalleryStore = create<I_GalleryDataState>(set => ({
  galleries: [],
  setGalleries: galleries => set({ galleries }),
}));
const GalleryMain = () => {
  const router = useRouter();
  const isLogin = useAuthStore(state => state.isLogin);
  const { galleries, setGalleries } = useGalleryStore();
  const navigateToAddGallery = () => {
    router.push('/gallery/add');
  };

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axiosValid_API.get('post/All/5');
        if (response.status >= 200 && response.status < 300) {
          setGalleries(response.data);
          console.log('갤러리 데이터 가져오기 성공!');
        } else {
          console.error('갤러리 데이터 가져오기 실패:', response.data);
        }
      } catch (error) {
        console.error('갤러리 데이터 가져오기 실패:', error);
      }
    };
    fetchGalleries();
  }, [setGalleries]);
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">
        {isLogin && <button onClick={navigateToAddGallery}>글 등록하기</button>}
      </div>
      <GalleryList galleries={galleries} />
    </div>
  );
};

export default GalleryMain;
