import useAuthStore from '@/store/auth/auth-store';
import { useRouter } from 'next/router';
import GalleryList from './GalleryList';
import { I_GalleryData } from './type/gallery';

interface I_GalleryDataState {
  galleries: I_GalleryData[];
  setGalleries: (galleries: I_GalleryData[]) => void;
  selectedGallery: I_GalleryData | null;
  setSelectedGallery: (gallery: I_GalleryData | null) => void;
}

// 서버 state는 client state로 관리할 필요가 없습니다. 나중에 지워주세요
// export const useGalleryStore = create<I_GalleryDataState>(set => ({
//   galleries: [],
//   setGalleries: galleries => set({ galleries }),
//   selectedGallery: null,
//   setSelectedGallery: gallery => set({ selectedGallery: gallery }),
// }));

const GalleryMain = () => {
  const router = useRouter();
  const isLogin = useAuthStore(state => state.isLogin);

  // 사용하지 않는 코드
  // const { galleries, setGalleries } = useGalleryStore();
  // const queryClient = useQueryClient();

  // 사용하지 않는 코드인것 같습니다. 사용하지 않는 코드는 지워주세요
  // const addPost = async (formData: T_gallerySchema) => {
  //   const response = await axiosValid_API.post('post', formData);
  //   return response.data;
  // };
  //
  // const { mutate: addGallery } = useMutation<I_GalleryData, Error, T_gallerySchema>({
  //   mutationFn: addPost,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['galleryUpload'] });
  //   },
  // });

  // 쿼리 클라이언트를 어디서 또 써줘야 할까. .. .
  //
  const navigateToAddGallery = () => {
    router.push('/gallery/add');
  };

  // 무한스크롤을 위해 hook으로 분리하였습니다. 나중에 지워주세요
  // useEffect(() => {
  //   const fetchGalleries = async () => {
  //     try {
  //       const response = await axiosValid_API.get('post/All/2');
  //       if (response.status >= 200 && response.status < 300) {
  //         setGalleries(response.data);
  //         console.log('갤러리 데이터 가져오기 성공!');
  //         console.log(response.data);
  //       } else {
  //         console.error('갤러리 데이터 가져오기 실패:', response.data);
  //       }
  //     } catch (error) {
  //       console.error('갤러리 데이터 가져오기 실패:', error);
  //     }
  //   };
  //   fetchGalleries();
  // }, [setGalleries]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">
        {isLogin && <button onClick={navigateToAddGallery}>글 등록하기</button>}
      </div>
      <GalleryList />
    </div>
  );
};

export default GalleryMain;
