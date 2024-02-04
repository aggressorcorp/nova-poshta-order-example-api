interface Item {
    Image: string,
    Price: number,
    Name: string,
    Desc: string
  }

interface ItemMap {
    [key: string]: Item;
}

const items : ItemMap = {
    'j1-concept-1': {
        Image: 'data:image/jpeg;base64,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',
        Price: 4180,
        Name: 'Test ',
        Desc: 'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
    },
    'j1-concept-2': {
        Image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOEBAQEA8QEBAQFhAPFRUOEBAQFRUVFhMWFhYWFRYYHiksGBonHRUXITEiJjUrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyIuLS0tLS0wLS0tLS0tLTAtLS8vLS0rLS0rLS0tLS0tKystLS0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIGBwMFCAT/xABPEAABAwICAwkKCwUFCQAAAAABAAIDBBEFEgYhMQcTF0FRYXGBsSIyNVNzkZKTodEUIzRCUlRysrPB0hUlgqLwM2OD0+EWJENEdISjwsP/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIDBAYFB//EADkRAAIBAgMEBwUGBwEAAAAAAAABAgMRBBIxBSFBURNhcZGxwdEGIjKBoRQVM0JT8CNDUoLC4fFi/9oADAMBAAIRAxEAPwC8UIWCpqGRMc97g1jAXOc42AAQCTe5GdRnGtMqWlJaCZpPoxWsDzu2ea5UO0q0xlqS6KEmOG9iQS17xb53NzefkUUJWadf+k6nAez10p4ltf8Aleb8l3kurd0GrfcRNiiGuxyl7utzjb2BaabSetftqph9l7mfdstSlVDlJ6s6GlgcNS+CnFfK773v+p6JMRmd300rvtSPPaVhMjjtc49JKakUTRlS0QtzylF0iEErC3RdIhAC3RdIhAC3RdIhAC3RdIhAC3RdIlQAokcNjiOglZo6+ZuyWQdD3DsKwJECcUbWLSStZsqZz9qV7u262tHp9WR2z71KP7xmvztI1+dRVCkpNaMz1MHh6nx04v5Lx1+pa+Dac0tRZsl4HnV3diy/2xs67KUtcCAQbg6wRrVAAqQaNaVzURDCTLASAWOPejjLDxHm2H2q6FfhI8DHez0Ws+Gdn/S9H2Ph8+8uJC8eG4hHUxNlhcHMd5weMEcRHIvYtRykouLcZKzQIQhAgVUadaSGplMMTjvEZIJB1PeCQXdA4vPyKZad4t8FpSGm0k3xTeUD5x82rpIVRErNXn+VHU+z2BTTxM+yPm/JfMEiELMdWCEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAJUiEAb7RHSF1FLrJdA/U9o1/xgco9o6lcEcgcA5pBa4AgjYQdhVBXVm7m2L79C6nebuh1tv4s21dRv1ELRQnvys5n2gwClD7TDVbpda4P5eHYTVCELUciVXul1e+VTYr6oo23F/nOJcT5so6lEFttLZc9bUnkke30XZfyWpXnyd5Nn0rA0uiw1OHKK79X9QQhCiagQhCABCEIAEISjWgBEJ2U8iMp5EDyy5DUJbHkQdSAsxEJQEEHkQKzEQlAPIlynkQPK+Q1CUgjiSIECEIQAIQhAAhCEAC32g1YYa6HXZshMR12uHCw/mynqWhWehm3uWN/wBBzXeYgpp2dyqvS6WnKm/zJrv3F+ITN8CF6F0fMcsiiMUkzzSu+k+R3ncSvMnzG7nHlJPtTF5x9RjpYEIQgkCEIQAIQhAApLoXiVFTGZ1a6JrSGBpmjMgvmOzUbcSjSRzQQQRcHUQU4uzuUYqgq9KVJtq/FdqfkXFgtXhldn+Ctppt6y58sAGXNfLtaNuU+ZYcVxbCKOTeqj4NFJYPymAHUb2OpvMVGdxqk3p1fY3a74KRzf22pRfdl8Jf4MXa5asyy5rI4t4RxxksPKcrJc+pPzJZo1VUlXjFXvIgmpt4YWWjGUOG9h1mkalqN1x7KWppMkbGMcx+YRtay/d7dXGvHuI/Lp/IO/EYrJ0o0NpcTfG+oMoMbSxu9vDdRNzfUkoZoacSc8R9lxkW5O0Ypc/yle6AiOashuGyMcJO+AcD3DtoK3O68xlLBSviijYTK4OyRtbmG9nUbBSHANA6SglE0JmzNvqfIC3WCL2tyFR/dx+TUvlnfhlHR5YO5bU2gsTjqU6basrPt3+pudz6mp58PhkMMTy7PrfGxzu+OokhLLpPgTHOY6SlDmktINOdRBsR3iXco8FwdMn3yvDU7lFDI97zNVAvc55s6K13Ek27jnU0nlVkYqlWEsRV6aUl7ztl7WRndF0ioJWU3wF0Dy1z98EUZj7kt1XOUcajtPO2Roc03B9h5CvVujaKQYW+nbC+VwlbI52+lurKWAWsB9IqKUdS6J1xrB2jlHvWepHf1nR7MrRhRWVtxd9ddbeRJULHBM2Roc03B9nMVlVR7id96EQhCBghCEACORCUIGtzLA/bj+XtQop8K50K7Ozwvu+HI1TtpSJSkVJ7iBCEIAEIQgAQhCABKkQgCwdyj/m/+3/+qhm7L4S/wYu1y9eAaTy4aJTFA2cyZCQ55ZYMzbLA378+ZRXS3SB2J1Hwl0bYzlZHla4vHck67kDlVyksiXE5zEYaotoyrW91pWfZFLTtRKdxH5dP5B34jF7d2uqkjnpAx8jQWPJ3t7mX7vjsVDtDdJXYVM+VsTZi9pis55Zbugb3APIsmmelT8Vkie+FsW9NcyzXl98xBvrAtsUsyyZTM8NUeNVW3u2tw5W0NjuY1ssmJwNdNK5pEmpz3uH9meIlS/dw+TUvlnfhlVlozjLsPqo6lsYkMYeMrnFoOZpG0A8q3OmOm78VjjjfAyIRuL7teX3u0ttrAttQpJRaCrhajxkKsV7qW/euvhcs/cp8FwdMn3yq+xHRLGXTTOY2bI6R7m2qLdyXkjVm1akmjG6M/D6ZlOKVrwwuOZ0jmk5nE7ADyra8MMv1KP1zv0qTcJJJ8DMsPjKVapOnBNSb1a0u+tcyH6QaOYhTRtlq2vy3DA6SQPsTrsNZts9i0FlM9LtPZMTgbA6mZGGubLma9zzqBFrFo5VD7Kt24HrYbpXT/ixSfJaW72PpKh0TrjYdo5VIIJmyNDmnV2cxUbss9LUOidcbOMcqg1c3UarhuehIEJkMoeA5p1dnMU9QPQTvvQIQhAwShIhAGfOhMQmV5RhSL2YRhzqudsDC1rn3IMhIb3LS43IB4mlSbg5q/G03pSfoQoyeiKa2MoUWo1JpO19/LTyIahTLg5q/HU3pSfoRwc1fjqb0pP0J5JcmVfeeD/ViQ1CmXBzV+OpvSk/Qjg5q/HU3pSfoRklyYfeeD/ViQ1CmXBzV+NpvSk/Qoxi+HmknfTPc10kYaTvZJFnC4tcBDjJaotpY3D1pZac03yR5EKU4foJUzwslbLAGyNa8Bz5AQCLi/cHWvTwc1fjab0pP0IyS5Mre0sIm06iuiHLWYlh+a72DuuMDj5xzqxODmr8bTelJ+hHBzV+OpvSk/Qmoz5MhPaGCmrOrEqSyWysqt3KKp5zMlpWk7bvlsef+z2qPaUaEVGFxMlmkgc17xEBE55NyCdeZg1alOz1aMKxWHlPJGom3pbiRaydZLZOYwkgAEkkAAC5JOwAcZSNNhlkKb4NuZ1tQA6UspmmxtLcvt9kfnZSan3I4ABvlVITx5I2NHVe6koSfAxVNo4Wm7Ofdv/0VHZFlbNVuSREfFVb2n+8jaR7CFFMb3P66kBdkbOwXOaAmSwHGWkAjquk4SWqJUdoYaq7Rmr9d14kSslyr2UNI6aWOJpAdIWMBOy5cGi9uK5U3G5TW+OpfTl/y1FXeiNNavSotKpJK/MgdLM6M3Gw7RyrcxSB4uNn9bVJOCqt8dS+nL/lrLBuYVzDcT0vOM8uv/wAaHCT4BS2nhY/zFYjKFMuDmr8bTelJ+hHBzV+OpvSk/Qo5JcmafvPB/qxIalUx4OavxtN6Un6FH9IcGfQSxwyvY58rXSN3suIsDY98BrRlktUWUsfhqslCFRNvgeFCEKJpN9oB4Rg6Jfwnq4VQlFWSU8glhdkkbmyuyh1rtIOo7dRKKndFxWJ2V0zOY71HYjlCvozUVY5vbez62IrRqQtZRt87t8usvtC5+4TMU8cz1USv2E3a0naQD7FojNS0ObxOEqYe2e2++nVb1MiFjnNmuI2gE+xUI7dMxPX8czj/AOFGnKajqGGwlTEXyW3W167+hf6oLdUlczFpHNNiGw/c7EzhNxTxzPVRqOYxis1bM6edwdI4NBIaGiwFhqCpnNSR6+z8DVoVs8racP8Ah0VofLnoKN2y8MR/lW5Wi0H8G0PkIvuhb1XR+FHhVm3Uk3zfiCFQ9fuj4nHNKxszMrJHtF4mHU15A7F5+EzFPHM9VGodLE3rZNdq6a736HQCrrdv+Qw+XH4b1BOEzFPHM9TGtbjul1biEbYqiRr2NcJABG1vdAEbR0lKVRNWNGG2ZWp1ozlayfX6Gnhk+afOrx3PdDmUcTaiZoNVIMwzAHemkamjkdynnsqe0Som1FfSQuALXyR5gRcEB2YgjkNrLppRpRTdy7bGJlGEaK4731rggQtXpHiPwOknqA3MYmOeGnYXfNB5r2XPOJ6SVtS9z5KqYlxvlbLIxjeZrAbNCsnUUTzMHgZ4m7TSSOmkLnDBdMq+jeHMqJHsG1kz3SRkclnHuekWUx0h3U99pGMpmOjqJWubK65G9cR3t3GTrseLpSVVFtTZNeMlFWafHl2/tj9L62h/a1IynYPhAnhFQ+OwbffBZpFu6de1yNmw3Oy21ytT1Do5GStPdtc14J19012YE326wpZwl4p45nqo1XCaTbfE3YrZ1WcYQhK6irb3v1+e7kX6hUFwl4n45nqo1cmida+ooaaeU5pJY2vcQALk8wV0ZqTseVicDUw8VKdt/L/huUIVJ6Saf4jT1lXDHKwRxzSMaDGw2a15AF05TUdSGGws8Q2oW3cy7FTu7eSKmjI2iNx1fbWl4SsU8c31Ua0mP4/U4g5j6l4e6MFjcrGssCbnZtVM6ikrHr4HZtajWU52tv8ADsMP7Um+mPRCF5LIVNke70s+b7yTFYKumbK3K7qPGDyhZyhQPWaTVmRSrp3ROLXdR4iOULqin7xvQOxc91lM2VmV3FrB5CuhYO9b0DsWmg73+Xmcf7Q0ejdPk83+IlT3jug9i5Uf3zvtO7V1XU947oPYuVX9877Tu1SrcCnYv8z+3/IalG1FkAKk91HSeg/g2h8hF91b1aLQfwbQ+Qi+6FvVqj8KOIq/HLtZz3iehGJPmmc2jlLXSSEG7dYLyQe+Xm/2DxX6k/zt966NQodCuZ6a2xWStlj9fU5z/wBg8V+pP87fetVi2D1FE5rKmF0TnjO0Pym4va+onjXUKpndw+V0vkf/AHcoTpqKua8FtKpXrKnJKzvpf1IVozXClrKWZxs2OSNzjyNzWcfMSum1ynZWtud7oEbY2Ula7I5lmRyuvlLdgY88RGwHZa3HtKUktSW1sLOolUgr23Ps19SzMQo46iKSGUZo5WujcLkXa4WOsbOlVDj+5RUxuc6je2aPaGvdkkHNe1ndOroVyxvDgCCCDrBBuD0FPV0oJ6ni4bF1aD9x7nqtUcu4lhVRSuyTwyxOOwSMLQfsnYepeNdUVNOyVpZIxr2Ha17Q4HpBVeaX7mUMrXS0I3qUAner/Fu5m37x3s6NqplSa03ntYfbEJu1RZevVeq+vyKcshZJoXRucx7S1zSWua4WIINiCsdlUeyAXRmgXgyi8ixc6gLovQTwbReSYraXxHjba/Cj2+Rv1zXpkP3jXf8AUTfiOXSi5t0xH7xrvLzfiOUq3AzbE/En2eZp0JbIsqDo7D0J6ECJCUiUpFUewH+vYugIu9b0DsXP/wDr2LoCLvW9A7Fow2r+Xmcv7TfDS/v8IjajvHdDuxcrvHdO+07tXVFR3jug9i5Ydtd9p3arK3Aw7E/mf2/5DbIATkoVB7qOjtCPBtD5CL7oW9Wj0I8G0XkIvuhbxa46I4it+JLtZTVbuq1scsrBDTEMfI0XbJezXEcvMsXC5W+IpvRk96hGMfKJ/KS/fcvJ/XEsvSvmdZHZ2HcU+jX19SwuFyt8RTejJ71GdKtJZsUkjklZG1zGmMCPNYjNfXcrSX/rUgIc29WW08FSpyzQhZ/P1Esiyepfozuf1FfTyVGYRtt8TvgPxjgR5m2uM3LzBKze5E6tWFKOabsjS4LpNWUJG8VEjG/RJzsP8DtQ6rKdYNutuFm1dOCON8BynpyO29RVc19BLTSOimjdG9u1rxY9I5RzjUvMmpNaFdXB0K++UU78V6rX69Z0xg+LwVsQmp5BIw6jba12olrhta7WNR5VsVVG4nFJerfr3m0bNewvFz58pHnCtdaoSzRucpjKCoVpU07pelym92bCWxTxVTAB8IDmPtxvYNTunKbdQVc2Vt7tso3qkZx55X9QaB+aqiyzVN0mdPsxuWFg31+LGgLonQTwbReSYueAF0RoN4NovJMUqPxGTbi/hR7TfLm/TEfvGt8vP+I5dILnPS9v7wrfLz/iOUq/AzbCX8SfZ5o0tkWTw1Oyqi502USyFlyoSuLKbspEpQoHpif69i6Ai71vQOxc/wD5+5Wpwh4azuXTkEAXBjfydCvw7Sbv1HN+0VGpUjSyRbtmvZN23R5EqqO8d0HsXLLxrd9p3ar6l3RsMLXAVB1gj+zfyKh3HWetTqtO1jFsejUp588WtNU1zEsgJbJQFUe0kdGaEeDaLyEX3Qt4q90Y07w+CipoZZXNfFGxjhvchs4CxFwFtOEfDPrB9W/3LTGcbLecdVwldzk1Tlq+DJEcNg8RD6tnuSfsun+rw+qZ7lHuEfDPrB9W/wByOEfDPrB9W/3KWaPNEPsmJ/Tn3P0JD+zKf6vD6pnuWj04oIW4dWObDE1widYtjYCNmw2WPhGwz6wfVv8ActRpXpxh9RRVMMUpdJJG5jRvcguTzkKMpRyveW0cLiVVi3CWq4PmQzc40ZhxCoc6aRuSGzjCHWc/q+hy+ZXnGwNAAAAAAAAsABsAC5kpKmSF7ZInuY9utrmOLSOsKy9H91Q2aytivxb5Bt/iZ+YPUq6U4x3HrbUwOIqzzweZcuK7Od+8sXEsKp6puWeGOVo2Z2g26DxLQt3OcLDs3wbnsZJS3zZl7aLTLDpxcVkLeaZ4iP8APZe445RgXNXTAcvwiK3nurXkfI8WLxVH3Y5o9W9fQ9NFRxU7GxQxtjjbsawBoHUsz3hoJJAA1knUAFHcR03w+nB/3lkhHzYLSk9Y1e1Vvpdp5NXNMMIMMBuHd13Ug5HEbBzDrJSlUiluLsNs3EYiWjS4t/u7fZ9DX7oWOivrHFhvDCN6jI+cL3Lus+wBRkNWUNS5Vkbu7nYUaMaUFCOi3fvz6zE1q6E0H8HUfkmKgrK3NF9NKGno6aGWYtexjWOGR7rEc4CspNKW88zbVCdSlFU4t7+Cb4E/XO+lrf3hW+Wn/Ecre4QcO8efVvVPaQ1DZquplYbskkkeDYi7XPJBsdinWkmlZmfYmHq06k+kg1u4pria3Klsn2S2Wc6OwWQs29oTImxlFnHpPamr0YkzJNKOR7x5nELzqBtjoKvLW0glHI4bD+R5l6UqYpRUlZkafGWkgixCSy3tZSiQcjhsP5HmWmfGWkgixClcwzpOD6jHZLZOypcqdyFhlkuVZA1KGouPKY8iUNWQNTsqQ8piDUoasuVLZIllGZUZU+yWyB5RgalDU+yWyCSuMIS2T7JLIC1xtktk6yLIHYbZLZPskQOw2yWyVLZA7DbJ1ktkFIaV2bL4MhSn9jO+iUK3IeP9tjzNXpXHkrakcssrvSdm/NapSvdIpd7rc9tUrGSdYu09fcjzhRRVyVm0evg6nSYenPnFeG/6ghCFE0gsFVTCQcjhsP5FZ0JiaTVmaR0ZBsRYhGVbaogDxyEbCtc5hBsdoTTMsqeVmOyWydZOsgVhlkWTrJbIHlG2RZOsnWQOw2ySyclsgLDbIsnWS2RcdhtkJ1ktkh2G2RZPslsgYyyLJ9kWQFhLIslslsgdhLLLSwb5JGz6T2DzkD81jst7oRSb9iFM21w1xkd0MaXdrQOtNK5CpPo4SnyTfcrl2fBG8g8wQvQhb7HzbPIiW6Hhe/0u+NF3wHPq2lh1P82o9SqohX+5oIIIuDtBVQaZ4AaKYloJglJcw2Nm8rCeUcXKOtZq8PzHVez2OWV4aeq3x6+a8+8jyEqRZzqAQhCABYp4Q8c42FZUIE1c1bmkGx2osthNCHDn5V4i22o7UylxsMS2T7IsgVhlktk6yWyAGWTrJbIsgdhLJbIslsgdhtktk6yLIGNslsnWS2QFhtkWT7JbIGMslsnWTrIGkY7KzdyzCCxklU64MnxTLj5osS4cxNh/CoZo1gcldO2Nt2tHdPda4a2+vrPEPcrspKZkLGxxtDWMAa0DiAV1CF3dnPbfxqp0vs8X70tepf78O09CEIWs48F48Sw+OqidFK3Mx3nB4iDxEL2IQOMnFqUXZopvSbReaicTbPA42a8ewPHzT7D7FoSr+kjDgWuAc06iHC4I5wodjegEMxLqd5hcfmnXH1cbfaOZZZ0HrE63Ae0EJLLidz/qWj7UtPDsKxQt/W6HV0JPxBkaL2MRD79QNx1haaoopY+/je37TXN7VQ01qdDSr06qvTkn2O/gYUIIS2SLrMRY5Ys3SsiVAmrngLbakll7JY83SvOW2TK3GwyyWydZLZAWG2RZZLIyoCwyyLLJZLZIdjHZLZPTrIHYx2TrJ1kuU8iBqLGWRZeiKle/vY3O+ywu7FtqTRKultlp3tHLIBGP5iPYmk3oV1KkKf4klHtaXiaKy2+AaPz1z8sbSGgjO9w7lo6eM24lNcG3PWMIdUyb5bXkiuGnmc4i5HRZTWmpmRMDI2tYxuoNaLAK6FBv4tx4OO9oKVNOOH96XPgvXw7TxYHhEVFEIohzuce+c7lPu4ltEIWtJJWRyNScqknObu3qwQhCCAIQhAAhCEACZJsQhJ6Dj8RAdIO/P9caidWhCxz1O32f8CPA9MQhVnsR0BYJtqVCBsYlCEIIioQhIEKlCEIGgWRiEJgz20ilGCd8EIU4Hl434GWLS96OgdizIQtqOFn8QIQhMiCEIQAIQhAH/9k=',
        Price: 2080,
        Name: 'Test 1',
        Desc: 'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
    }
}


export default items