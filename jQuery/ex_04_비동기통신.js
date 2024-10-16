 // 데이터 요청 버튼 클릭 시, 동작하는 이벤트 만들기
 $('#req-button').on('click', () => {
    let date = prompt('개봉일자를 입력하세요', 'YYYYMMDD')
    let movieURL = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=${date}`

    // ajax(): 비동기통신을 지원하는 함수
    $.ajax({
        url: movieURL,
        type: 'get',
        success: (result) => {
            console.log(result.boxOfficeResult.dailyBoxOfficeList)

            let movieList = result.boxOfficeResult.dailyBoxOfficeList

            // 박스오피스순위, 영화이름, 개봉일을 콘솔창에 출력해보기
            // for문을 이용해서 
            // 배열안에있는 객체 데이터를 가지고오기
            // 배열변수[i].rank , openDt, movieNm
            for (let i = 0; i < movieList.length; i++) {
                let resultHTML = `<tr>
                             <td>${movieList[i].rank}</td>
                             <td>${movieList[i].movieNm}</td>
                             <td>${movieList[i].openDt}</td>
                           </tr>`
                $('table').append(resultHTML);
            }

            // table형태로 웹페이지에 출력해보기
            // 태그랑 변수를 ==> 백틱을 활용해서

            // $('table').append()
        },
        error: () => {
            alert('요청실패..')
        }
    })
})