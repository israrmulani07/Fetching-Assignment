import React, { useEffect } from 'react'

export const Child = ({ data }) => {

    useEffect(() => {
        // getData()
    }, []);

    return (
        <React.Fragment>
            <table>
                <tr>
                    <th >No</th>
                    <th>Image</th>
                    <th>Title</th>

                </tr>
                {
                    data && data.articles && data.articles.length > 0 && data.articles.map((item, ind) => {
                        return (
                            <tr>
                                <td>{ind + 1}</td>
                                <td><img style={{ height: "80px" }} src={item.urlToImage}></img></td>
                                {/* <td>{item.urlToImage}</td> */}
                                <td>{item.title}</td>
                            </tr>
                        )
                    }
                    )}

            </table>
        </React.Fragment>
    )
}
