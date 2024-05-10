# 댕댕냥(daeng daeng Nyang)

- 프로젝트 주소 : [daengdaengnyang.shop](https://daengdaengnyang.shop)

**- 프로젝트의 사용된 기술 :**<br>

- [Language] typescript (FE and BE)
- [FrontEnd] Next.js, React, TypeScript, JavaScript, Zustand, React-Query, tailwindCSS
- [BackEnd] node.js, nest.js, pm2
- [devOps] aws Ec2, s3, myspl, aws CodeDeploy


## 프로젝트 소개

- 프로젝트명 : 댕댕냥(daeng daeng Nyang)
- 설명 : 1,300만 반려인을 위한 맞춤 서비스의 부재, 및 one point로 다양한 서비스(반려동물 출입, 반려동물과 함께할 산책로 위치, 동물 약국, 동물병원 등)를 한곳에서 볼 수 있는 웹 페이지가 없어, 반려동물과 관련 정보를 여러 곳에서 찾아보는 불편함, 정보의 다양성으로 시행착오를 혼자서 여러 번 겪어야 하는 시간 소비 등을 배경으로, 한 곳에서 원하는 정보를 찾고, 반려동물 관련 문화생활의 접근성을 용이하게 하기 위해 탄생하였습니다.
- 개발기간 : 2024년 03 ~ 2024년 05

## 서비스 아키텍처

- [FrontEnd]
<img width="613" alt="KakaoTalk_20240510_053957852" src="https://github.com/LeeDongTak/daeng-daeng-nyang/assets/56667369/11914310-f314-446f-953f-4f51631a3836">

- [BackEnd]
![KakaoTalk_20240510_003137678](https://github.com/LeeDongTak/daeng-daeng-nyang/assets/56667369/a2d558f6-52e3-4f20-9117-137ce6f6523c)


## 기술 스택

![KakaoTalk_20240510_182959304](https://github.com/LeeDongTak/daeng-daeng-nyang/assets/56667369/249d8f07-fd5b-447d-a6ed-eedc55767e59)


## 주요 기능

**`반려동물 등록 기능`** 본인의 반려동물을 등록하는 기능입니다. 

**`Map Page`** 서울시에서 제공하는 공공데이터API, 산책로 API, 각 구별 동물병원API, 동물 약국 API를 kakao map API를 활용하여 보여주는 기능입니다. 

**`Gallery Page`** 자신의 반려동물을 자랑하는 Page입니다. 젋은층을 태겟팅하여 커뮤니티 활성화와 웹서비스 홍보를 예상하고 만든 페이지 입니다. sns서비스와 유사아여 젋은이들의 유입과 UX변리함을 적용하였습니다. 

**`Schdule Page`** 반려동물과 관련된 일정을 관리하는 page입니다.

## 코드 컨벤션

### 폴더 구조

```
📦public
 ┣ 📂font
 ┣ 📂image
 ┣ 📂SVG
 ┣ 📜favicon.ico
 ┣ 📜next.svg
 ┗ 📜vercel.svg
src
 ┣ 📂api
 ┣ 📂components
 ┣ 📂hooks
 ┃ ┣ 📂client
 ┃ ┗ 📂server
 ┣ 📂lib
 ┃ ┗ 📜utils.ts
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜hello.ts
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┣ 📂store
 ┣ 📂styles
 ┃ ┗ 📜globals.css
 ┗ 📂types
 ┃ ┗ 📂common
```

### 변수명 & 함수명
# Public 폴더

- image & font는 Public 폴더안에 image, SVG, font 등 파일형식에 맞는 폴더 생성 후 파일저장

# Src 폴더

- 컴포넌트 파일은 **파스칼 케이스**로 작성`**e.g) ComponentsTest.tsx**`
- 커스텀 훅 파일은 use가 포함된 카멜케이스로 작성 `e.g) useFetchQuery.tsx`
- zustand파일명은 기능명-store.ts로 작성(케밥케이스) `e.g) auth-store.ts`
- 일반 .ts 파일은 **케밥 케이스**로 작성 (ex. common.ts, date-helper.ts)
- 폴더명은 전부 케밥케이스
- 페이지명은 `index**Page**.tsx` **(끝에 Page명 표기)**
- 하나의 파일에는 70줄이하 ( import 포함/ `**주석제외**` )
- node와의 통신 API는 사용하는 컴포넌트 폴더안에 api폴더를 넣기
- component의 props내려줄 타입지정은 `Interface`  / 타입지정시 타입 지정방법을 확인하셈
    
    ```jsx
    interface I_Map~~ {} // interface로 지정시 I_ 로 시작
    type T_Map = (arg:T) => void // type으로 지정시 T_ 로 시작
    ```
    
- type 두번 이상 사용하면 types/폴더생성 하여 작성하기, `작성방법 : ex) toast-type.ts`
- !금지 ( 타입가드 “!” 금지 )
- **컴포넌트 & 분리**
    - `**rafce**` 스니펫 사용
    
    ```jsx
    const Component () => {
    	return <></>
    }
    
    export default Component;
    ```
    
- **변수명 & 함수명**
    - **변수명**
        - 예약어는 `**const**` 로만 필요 시 `**let**`
        - 상수 (not, const, 하드코딩 값)는 모두 대문자로 작성하되, 단어 구분 필요 시 **`_`**로 작성
        `**e.g) MAX_COUNT = 20`;**
        - Boolean 타입에 관해서는 접두사 `**‘is’**` 사용
    
    - **함수명**
        - 함수는 **단일 책임 원칙** (only 기능 1개)
        - 모든 함수 이름은 동사형으로 작성 **(카멜 케이스)**
        `**e.g) addComment**, **checkIsDone`**
        - **CRUD**
            - create: 접두사 add `**e.g) addCart...**`
            - read: 접두사 fetch `**e.g) fetchData ...**`
            - update: 접두사 update **`e.g) updateCart ...`**
            - delete: **`e.g) reomveCart ...`**
        - **Handler**
            - **`e.g) clickCartHandler ...`
            -** click기능명Handler
        - **React Query (Custom Hook)**
            - removeCartMutation = useMutaiton()…
            return { remove: removeCartMutation.mutate }
- **Custom Hooks**
    - **hooks > user(폴더 - 페이지명) > useAuth(회원가입, 로그인 등등), useInput, useVaildate(파일)**
        - 폴더 → 페이지명, 파일 → use기능명
        - 더불어, 전역적으로 사용되는 Hook일 경우 `**common**` 폴더로 분리합니다.
    - **react query를 custom hook으로 만들 경우**
        - `useQuery` 사용하는 hook과 `useMutation`을 사용하는 hook으로 분리
        - `useQuery` 사용하는 훅 네이밍: ~~fetchQuery
        - `useMutation`을 사용하는 훅 네이밍: ~~setQuery
    - **zustand를 custom hook으로 만들 경우**
        - ~~State
        - `e.g.) useOrderState`
- lib/query-key 안에 폴더/`파일-key.ts` → enum으로 작성  || enum 명은 대문자와 snake로 사용하는 **`component_KEY` 로 작성**
    
    ```jsx
    lib/query-keys/map/map-key.ts
    enum MAP_KEY {
    	...
    }
    ```
    
- components안 폴더 구조
    - 최상위 폴더는 페이지 별로 구분 그외 컴포넌트는 common폴더에 하위폴더생성
    - ui폴더는 shadcn/ui 공통 컴포넌트를 위한 폴더
    - 하위폴더 구조
        
        ```jsx
        📦form
         ┣ 📂button
         ┃ ┗ 📜Button.tsx
         ┣ 📂formBody
         ┃ ┣ 📂imgForm
         ┃ ┃ ┗ 📜ImgForm.tsx
         ┃ ┣ 📂input
         ┃ ┃ ┗ 📜Input.tsx
         ┃ ┗ 📜FormBody.tsx
         ┣ 📂FormButton
         ┃ ┗ 📜FormButton.tsx
         ┣ 📂formHeader
         ┃ ┗ 📜FormHeader.tsx
         ┗ 📜Form.tsx
        ```
        
- **Zustand convention**
    
    **Action 과 Value를 나눕니다. ← zustand의 state/Dispatch가 호출하면 하위 전체가 불필요하게 렌더링 되기 때문입니다.** 
    
    ```tsx
    //e.g
    
    // 일반 작성법 💔💔
    import { create } from 'zustand';
    
    interface countType {
    	count: number
    }
    
    const useCountStore = create<countType>(set => ({
    	count: 0,
        
      plusNumber: (value) => set((state) => ({
        count: state.count+ value
      }))
      miunsNumber: (value) => set((state) => ({
        count: state.count- value
      }))
    }
    
    // convention 작성법 👍👍
    
    	interface countType {
    		count: number
    	}
    	const useCountSotre = create<countType>()(() => ({
    	  count: 0
    	}))
    	
    	export const plusNumber = () => useCountSotre.setState((state) => ({ count: state.number + 1 }))
    	
    	export const minusNumber = () => useCountSotre.setState((state) => ({ count: state.number 1 1 }))
    	
    	export default useCountStore
    ```

## 팀원 소개

|  이름  | 역할     | GitHub                        |
| :----: | -------- | ----------------------------- |
| 이동탁 | 리더     | https://github.com/LeeDongTak  |
| 김선아 | 부리더   | https://github.com/kim-sunah  |
| 최문길 | 팀원     | https://github.com/lunaxislu  |
| 김건우 | 팀원     | https://github.com/doodookim  |
| 윤호준 | 팀원     | https://github.com/tjdsksro90 |
