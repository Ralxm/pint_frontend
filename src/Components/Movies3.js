import React from 'react';

    class MoviesList extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                pictures: [
                    {id: 1, src: './ff1.jpg'},
                    {id: 2, src: './ff2.jpg'},
                    {id: 3, src: './ff4.jpg'}
                ]
            };
        }

        render(){
            return(
                <div>
                    {this.state.pictures.map((pictures) =>{
                        return (
                            <Picture src={pictures.src}></Picture>
                        );
                    })}
                </div>
            )
        }
    }

    function Picture(props){
        return(<img src={props.src}/>)
    }   

    export default MoviesList;