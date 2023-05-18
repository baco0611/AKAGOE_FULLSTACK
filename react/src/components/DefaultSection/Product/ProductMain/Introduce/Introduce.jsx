import { useEffect, useState } from 'react'
import './Introduce.scss'
import * as Img from './img'
import axios from 'axios'

function Introduce({ slug }) {

    const [introduceData, setIntroduceData] = useState({name: '',content: ' ',mainColor: ''})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //fetch API
            const fecthAPI = async (api) => {
                await axios.get(api)
                    .then(response => {
                        const apiData = response.data
                        setIntroduceData(apiData.data[0])
                        setIsLoading(false)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

            const introduceApi = `http://localhost:3001/introduce-${slug}`
            fecthAPI(introduceApi)
        // setIntroduceData({
        //     name: 'Akagoe',
        //     content: '赤声 là một trò chơi hướng tới giáo dục dành cho trẻ em từ 6 tuổi trở lên./r/nTên kết hợp giữa 赤ちゃん (trẻ em) và 声 (âm thanh) thể hiện tiếng nói của trẻ em./r/nHình thức: Phiêu lưu và giải đố./r/nTrò chơi sẽ là một hành trình giúp các em có thể học tập các kỹ năng mềm như phân loại rác, tự đi siêu thị, sắp xếp đồ đạc, …/r/nCác thử thách sẽ được lặp lại theo ngày ở các địa điểm khác nhau như cuộc sống thường ngày của các em nhỏ để các em học tập được các kỹ năng đó.',
        //     mainColor: '#6BABAB'
        // })
    }, [])

    if(isLoading) 
        return (
            <div>LOADING</div>
        )

    return (
        <div id="introduce-section">
            <div className='introduce-left'>
                <img src={Img[`${slug}Logo`]}/>
            </div>
            <div className='introduce-right'>
                <div>
                    <div className='introduce-title'>
                        <div className='introduce-line' style={{background: introduceData.mainColor}}></div>
                        <h3 style={{color: introduceData.mainColor || '#6BABAB'}}>About product</h3>
                    </div>

                    <h1>{introduceData.name}</h1>

                    <ul className='introduce-content'>
                        {
                            introduceData.content.split('/r/n').map((row, index) => {
                                return <li key={index}>{row}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Introduce