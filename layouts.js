const layouts = [
    {
        title: '第壱話 使徒、襲来',
        texts:[
            {
                placeholder:'使徒',
                minLength:2,
                maxLength:5,
            },
            {
                placeholder:'襲来',
                minLength:2,
                maxLength:5,
            },
            {
                placeholder:'第壱話',
                minLength:0,
                maxLength:6,
            }
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [a,b,sub] = texts;
            const aLength = a.length;
            const bLength = b.length;

            const titleCanvas = (_=>{
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const verticalCanvas = makeVerticalTextCanvas(a,-space)
                const pointCanvas = makeTextCanvas('、')
                const horizontalCanvas = makeTextCanvas(b,-space,padding)

                const width = Math.ceil( horizontalCanvas.width / bLength * (bLength+0.3) ) + verticalCanvas.width + padding
                const height = verticalCanvas.height

                canvas.width = width
                canvas.height = height

                ctx.drawImage(
                    verticalCanvas, 0,0
                )
                ctx.drawImage(
                    pointCanvas,
                    verticalCanvas.width - space * 2, height - horizontalCanvas.height
                )
                ctx.drawImage(
                    horizontalCanvas, 
                    verticalCanvas.width * 1.3, height - horizontalCanvas.height
                )
                return canvas
            })()

            if(sub){
                const subCanvas = makeTextCanvas(sub,-space)
                let subHeight = height * 0.19;
                let subWidth = subHeight / subCanvas.height * subCanvas.width;
            
                ctx.drawImage(
                    subCanvas,
                    padding,padding,
                    subWidth,subHeight
                );
                let titleHeight = height - padding * 2 - subHeight
                let titleWidth = Math.min( titleHeight / titleCanvas.height * titleCanvas.width, width - padding )
                ctx.drawImage(
                    titleCanvas,
                    padding , padding + subHeight,
                    titleWidth , titleHeight
                )
            }else{

                let titleHeight = height - padding * 2
                let titleWidth = Math.min(titleHeight / titleCanvas.height * titleCanvas.width , width - padding )
                ctx.drawImage(
                    titleCanvas,
                    padding , (height - titleHeight) / 2,
                    titleWidth , titleHeight
                )
            }
        }
    },
    {
        title: '第拾参話 使徒、侵入',
        texts:[
            {
                placeholder:'使徒',
                minLength:2,
                maxLength:5,
            },
            {
                placeholder:'侵入',
                minLength:2,
                maxLength:5,
            },
            {
                placeholder:'第拾参話',
                minLength:0,
                maxLength:6,
            }
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                fontSize,
                space,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [a,b,sub] = texts;
            const aLength = a.length;
            const bLength = b.length;

            const titleCanvas = (_=>{
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const aCanvas = makeTextCanvas(a,-space)
                const pointCanvas = makeTextCanvas('、')
                const bCanvas = makeVerticalTextCanvas(b)
                
                const width = Math.ceil( aCanvas.width / bLength * (bLength+0.2) ) + bCanvas.width
                const height = bCanvas.height

                canvas.width = width
                canvas.height = height

                ctx.drawImage(aCanvas, 0,0)
                ctx.drawImage(
                    pointCanvas, 
                    aCanvas.width - fontSize * 0.05 , 0 ,
                    pointCanvas.width * 0.8,pointCanvas.height * 1.14
                )
                ctx.drawImage(bCanvas, width - bCanvas.width, 0)
                return canvas
            })();

            let titleWidth = width - padding * 2
            let titleHeight = titleWidth / titleCanvas.width * titleCanvas.height;
            let maxTitleHeight = height - padding * 2
            titleHeight = Math.min(titleHeight,maxTitleHeight)
            // titleWidth = Math.min(titleWidth,width - padding * 2)
            ctx.drawImage(
                titleCanvas,
                padding , padding,
                titleWidth , titleHeight
            );
            
            if(sub){
                const subCanvas = makeTextCanvas(sub,-space)
                let subHeight = height * 0.19;
                let subWidth = subHeight / subCanvas.height * subCanvas.width;
            
                ctx.drawImage(
                    subCanvas,
                    padding,height - padding - subHeight,
                    subWidth,subHeight
                );
            }

        }
    },
    {
        title: '第弐拾伍話 終わる世界',
        texts:[
            {
                placeholder:'終わる世界',
                minLength:2,
                maxLength:10,
            },
            {
                placeholder:'第弐拾伍話',
                minLength:2,
                maxLength:10,
            }
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [text,sub] = texts;

            randOne([
                _=>{
                    // 标题在上
                    const textCanvas = makeTextSizeDiffCanvas(text,-space * 2)
                    const textWidth = width - padding * 2
                    const textHeight = Math.min(textWidth / textCanvas.width * textCanvas.height,height - padding * 2)
                    ctx.drawImage(
                        textCanvas,
                        padding, padding * 2,
                        textWidth, textHeight
                    )
                    
                    if(sub){
                        let subCanvas = makeTextCanvas(sub,-space)
                        let subHeight = height * 0.2;
                        let subWidth = subHeight / subCanvas.height * subCanvas.width * 0.8;
                        let subLeft = randOne([
                            padding, // left
                            (width - subWidth) / 2, //center
                            width - subWidth - padding // right
                        ]);
    
                        ctx.drawImage(
                            subCanvas,
                            subLeft, height - subHeight - padding * 2,
                            subWidth,subHeight
                        );
                    }
                },
                _=>{
                    // 标题在下
                    const textCanvas = makeTextSizeDiffCanvas(text,-space * 2)
                    const textWidth = width - padding * 2
                    const textHeight = Math.min(textWidth / textCanvas.width * textCanvas.height,height - padding * 2)
                    ctx.drawImage(
                        textCanvas,
                        padding, height - padding * 2 - textHeight,
                        textWidth, textHeight
                    )
                    
                    if(sub){
                        let subCanvas = makeTextCanvas(sub,-space)
                        let subHeight = height * 0.2;
                        let subWidth = subHeight / subCanvas.height * subCanvas.width * 0.8;
                        let subLeft = randOne([
                            padding, // left
                            (width - subWidth) / 2, //center
                            width - subWidth - padding // right
                        ]);
    
                        ctx.drawImage(
                            subCanvas,
                            subLeft, padding * 2,
                            subWidth,subHeight
                        );
                    }
                },
                _=>{
                    // 标题在中
                    const textCanvas = makeTextSizeDiffCanvas(text,-space * 2)
                    ctx.drawImage(
                        textCanvas,
                        width * 0.2,height * 0.45,
                        width * 0.6,height/4
                    )
                    
                    if(sub){
                        let subCanvas = makeTextCanvas(sub,-space)
                        let subHeight = height * 0.12;
                        let subWidth = subHeight / subCanvas.height * subCanvas.width * 0.8;
                    
                        ctx.drawImage(
                            subCanvas,
                            (width - subWidth) / 2, height * 0.25,
                            subWidth,subHeight
                        );
                    }
                },
                _=>{
                    // 标题在左 sub在右
                    const textCanvas = makeVerticalTextCanvas(text,-space * 2)
                    const textHeight = height - padding * 2
                    const textWidth = Math.min(textHeight / textCanvas.height * textCanvas.width, width - padding * 2) * rand(0.8,1.4)
                    
                    ctx.drawImage(
                        textCanvas,
                        padding, padding,
                        textWidth, textHeight
                    )
                    
                    if(sub){
                        let subCanvas = makeTextCanvas(sub,-space)
                        let subHeight = height * 0.18;
                        let subWidth = Math.min(
                            subHeight / subCanvas.height * subCanvas.width * 0.8,
                            width - textWidth - padding * 2
                        );
                        const subLeft = width - padding - subWidth;

                        const subTop = randOne([
                            padding,
                            (height - subHeight) / 2, // middle
                            height - subHeight - padding
                        ]);
                        ctx.drawImage(
                            subCanvas,
                            subLeft, subTop,
                            subWidth,subHeight
                        );
                    }
                },
                _=>{
                    // 标题在右 sub在左
                    const textCanvas = makeVerticalTextCanvas(text,-space * 2)
                    const textHeight = height - padding * 2
                    const textWidth = Math.min(textHeight / textCanvas.height * textCanvas.width, width - padding * 2) * rand(0.8,1.4)
                    
                    ctx.drawImage(
                        textCanvas,
                        width - padding - textWidth, padding,
                        textWidth, textHeight
                    )
                    
                    if(sub){
                        let subCanvas = makeTextCanvas(sub,-space)
                        let subHeight = height * 0.18;
                        let subWidth = Math.min(
                            subHeight / subCanvas.height * subCanvas.width * 0.8,
                            width - textWidth - padding * 2
                        );
                        const subLeft = padding;

                        const subTop = randOne([
                            padding,
                            (height - subHeight) / 2, // middle
                            height - subHeight - padding
                        ]);
                        ctx.drawImage(
                            subCanvas,
                            subLeft, subTop,
                            subWidth,subHeight
                        );
                    }
                },
            ])()
        }
    },
    {
        title: '第四話 雨、逃げ出した後',
        texts:[
            {
                placeholder:'雨',
                length:1,
            },
            {
                placeholder:'逃げ出した後',
                minLength:2,
                maxLength:10,
            },
            {
                placeholder:'第四話',
                minLength:2,
                maxLength:10
            }
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [a,b,sub] = texts;

            const aCanvas = makeTextCanvas(a)
            const pointCanvas = makeTextCanvas('、')

            const bCanvas = (_=>{
                // b字符需要拐个弯
                const bSliceIndex = Math.floor(b.length/2)
                const ba = b.slice(0,bSliceIndex)
                const bb = b.slice(bSliceIndex)
                console.log({ba,bb})

                const baCanvas = makeTextCanvas(ba,-space)
                const bbCanvas = makeVerticalTextCanvas(bb,-space)



                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = baCanvas.width;
                canvas.height = baCanvas.height + bbCanvas.height;

                ctx.drawImage(baCanvas, 0,0)
                ctx.drawImage(bbCanvas, 
                    baCanvas.width - bbCanvas.width,baCanvas.height - space,
                    bbCanvas.width,bbCanvas.height
                )
                return canvas;
            })()

            ctx.drawImage(aCanvas, 
                padding, padding,
                width * 0.35, width * 0.35,
            )

            ctx.drawImage(
                pointCanvas, 
                padding + width * 0.31 , padding ,
                width * 0.24, width * 0.35,
            )
            let bWidth = width * 0.5 - padding
            let bHeight = bWidth / bCanvas.width * bCanvas.height

            ctx.drawImage(bCanvas, 
                width * 0.5, padding,
                bWidth, bHeight
            )


            const subCanvas = makeTextCanvas(sub,-space)
            let subHeight = height * 0.19;
            let subWidth = subHeight / subCanvas.height * subCanvas.width;
        
            ctx.drawImage(
                subCanvas,
                padding,height - padding - subHeight - space * 2,
                subWidth,subHeight
            );
        }
    },
    {
        title: 'air',
        texts:[
            {
                placeholder:'air',
                minLength:2,
                maxLength:10,
            },
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
                fontColor,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [text,sub] = texts;

                // [air]
                // 小于十个字符 框框
                // const textCanvas = makeTextSizeDiffCanvas(text,-space);
                const textCanvas = makeTextCanvas(text);
                const _config = randOne([
                    {
                        heightScale: 0.2,
                        padding: padding,
                        borderWidth: space * 0.5,
                    },
                    // {
                    //     heightScale: 0.4,
                    //     padding: padding * 1.5,
                    //     borderWidth: space
                    // },
                    // {
                    //     heightScale: 0.6,
                    //     padding: padding * 2,
                    //     borderWidth: space * 1.5
                    // },
                ]);
                const textHeight = height * _config.heightScale;
                const textWidth = Math.min(textHeight * textCanvas.width / textCanvas.height, width * 0.8);

                ctx.drawImage(
                    textCanvas,
                    (width - textWidth) / 2, ( height - textHeight ) / 2,
                    textWidth,textHeight
                );
                ctx.strokeStyle = fontColor;
                ctx.lineWidth = _config.borderWidth;
                const rectWidth  = textWidth + _config.padding * 2;
                const rectHeight = textHeight + _config.padding;

                const rectLeft = (width - rectWidth) / 2;
                const rectTop = (height - rectHeight) / 2;
                ctx.strokeRect(
                    rectLeft, rectTop,
                    rectWidth, rectHeight
                );

        }
    },
    {   //书名号包裹的情况
        title: '【在世界中心呼喊】',
        texts:[
            {
                placeholder:'【在世界中心呼喊】',
                minLength:2,
                maxLength:10,
            },
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
                fontColor,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [text,sub] = texts;

            let titleCanvas;
            if(0.5 > Math.random()){
                titleCanvas = makeTextCanvas(text,-space)
            }else{
                titleCanvas = makeVerticalTextCanvas(text,-space)
            }
            
            let titleWidth;
            let titleHeight;
            let titleTop = 0;
            let titleLeft = 0;
            let titleScale = titleCanvas.width / titleCanvas.height;

            if(titleScale > scale){
                titleWidth = width;
                titleHeight = titleWidth / titleScale * rand(1,1.6)
                titleTop = (height - titleHeight) / 2
            }else{
                titleHeight = height;
                titleWidth = titleHeight * titleScale * rand(1,1.6)
                titleLeft = (width - titleWidth) / 2;
            }

            ctx.drawImage(
                titleCanvas,
                titleLeft , titleTop,
                titleWidth, titleHeight
            )

        }
    },
    {   //大于十个字符 六字多排 世界中心呼唤
        title: '最終話 世界の中心でアイを叫んだけもの',
        texts:[
            {
                placeholder:'世界の中心でアイを叫んだけもの',
                minLength:2,
                maxLength:10,
            },
            {
                placeholder:'最終話',
                minLength:2,
                maxLength:10,
            },
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
                fontColor,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [text,sub] = texts;

            const _texts = new Array(Math.ceil(text.length/6)).fill(1).map((_,index)=>{
                const start = index * 6;
                const end = start + 6;
                return text.slice(start,end)
            })
            const titleCanvas = makeLinesCanvas(_texts,-space * 1.5);
            ctx.drawImage(
                titleCanvas,
                width * 0.12,height * 0.25,
                width * 0.76,height * 0.67
            )

            if(sub){
                const subCanvas = makeTextCanvas(sub,-space)
                let subHeight = height * 0.15;
                let subWidth = subHeight / subCanvas.height * subCanvas.width * 0.8;
            
                ctx.drawImage(
                    subCanvas,
                    (width - subWidth) / 2 - space, height * 0.1,
                    subWidth,subHeight
                );
            }

        }
    },
    {
        title: '监督 庵野秀明',
        texts:[
            {
                placeholder:'庵野秀明',
                minLength:2,
                maxLength:10,
            },
            {
                placeholder:'监督',
                minLength:2,
                maxLength:10,
            },
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
                fontColor,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [a,b] = texts;

            // ┗
            const titleCanvas = (_=>{
                
                const aSliceIndex = Math.floor(a.length/2)
                const aa = a.slice(0,aSliceIndex)
                const ab = a.slice(aSliceIndex)


                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const verticalCanvas = makeVerticalTextCanvas(aa,-space)
                const horizontalCanvas = makeTextCanvas(ab,-space)

                const width = horizontalCanvas.width + verticalCanvas.width - space
                const height = verticalCanvas.height

                canvas.width = width
                canvas.height = height

                ctx.drawImage(verticalCanvas, 0,0)
                ctx.drawImage(horizontalCanvas, width - horizontalCanvas.width - space, height - horizontalCanvas.height)
                return canvas
            })();

            const subCanvas = makeTextCanvas(b,-space)
            let subHeight = height * 0.2;
            let subWidth = Math.min(subHeight / subCanvas.height * subCanvas.width,width - padding * 2);
        
            ctx.drawImage(
                subCanvas,
                width - subWidth - padding,padding,
                subWidth,subHeight
            );

            let titleHeight = height - padding * 2 - subHeight
            let titleWidth = Math.min(titleHeight / titleCanvas.height * titleCanvas.width, width - padding * 2)
            ctx.drawImage(
                titleCanvas,
                padding , height - titleHeight - padding,
                titleWidth , titleHeight
            )

        }
    },
    {
        title: '原作 石森章太郎',
        texts:[
            {
                placeholder:'石森章太郎',
                minLength:2,
                maxLength:10,
            },
            {
                placeholder:'原作',
                minLength:2,
                maxLength:10,
            },
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
                fontColor,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [a,b] = texts;
            // ┒
            const titleCanvas = (_=>{
                                    
                const aSliceIndex = Math.ceil(a.length/2)
                const aa = a.slice(0,aSliceIndex)
                const ab = a.slice(aSliceIndex)


                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const aaCanvas = makeTextCanvas(aa,-space)
                const abCanvas = makeVerticalTextCanvas(ab,-space)

                const width = aaCanvas.width + abCanvas.width - space
                const height = abCanvas.height

                canvas.width = width
                canvas.height = height

                ctx.drawImage(aaCanvas, 0,0)
                ctx.drawImage(abCanvas, aaCanvas.width - space, 0)
                return canvas
            })();

            const subCanvas = makeVerticalTextCanvas(b,-space)
            let subWidth = width * 0.15;
            let subHeight = Math.min(subWidth * subCanvas.height / subCanvas.width * 1.1,height - padding * 2);

            ctx.drawImage(
                subCanvas,
                padding,padding,
                subWidth,subHeight
            );

            let titleWidth = width - padding * 2 - subWidth
            let titleHeight = Math.max( titleWidth / titleCanvas.width * titleCanvas.height , height * 0.6)
            ctx.drawImage(
                titleCanvas,
                width - titleWidth - padding , height - titleHeight - padding,
                titleWidth , titleHeight
            )
        }
    },
    {
        title: 'NEON GENESIS EVANGELION Rei II',
        texts:[
            {
                placeholder:'NEON GENESIS EVANGELION',
                minLength:2,
                maxLength:10,
            },
            {
                placeholder:'Rei II',
                minLength:2,
                maxLength:10,
            },
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
                fontColor,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [a,b] = texts;
            

            const subCanvas = makeTextCanvas(b,-space)
            let subHeight = height * 0.2;
            let subWidth = subHeight / subCanvas.height * subCanvas.width;
        
            ctx.drawImage(
                subCanvas,
                padding,height - padding - subHeight,
                subWidth,subHeight
            );


            const engs = a.split(/\s+/g);
            const titleCanvas = makeLinesDiffSizeCanvas(engs,{letterSpacing:-space})
            
            let titleWidth = width - padding * 2
            let titleHeight = titleWidth / titleCanvas.width * titleCanvas.height * 1.2;
            let maxTitleHeight = height - padding * 2 - subHeight
            titleHeight = Math.min(titleHeight,maxTitleHeight)
            // titleWidth = Math.min(titleWidth,width - padding * 2)
            ctx.drawImage(
                titleCanvas,
                padding , padding,
                titleWidth , titleHeight
            );
    
    

        }
    },
    {
        title: 'Do you love me?',
        texts:[
            {
                placeholder:'Do you love me?',
                minLength:2,
                maxLength:20,
            },
            {
                placeholder:'EPISODE:25',
                minLength:2,
                maxLength:20,
            },
        ],
        make:({
            canvas,
            ctx,
            texts,
            config,
            functions,
        })=>{
            const {
                width,
                height,
                scale,
                padding,
                space,
                fontColor,
            } = config;
            
            const {
                randOne,
                setCtxConfig,
                makeTextCanvas,
                makeTextSizeDiffCanvas,
                makeLinesCanvas,
                makeLinesDiffSizeCanvas,
                makeVerticalTextCanvas,
            } = functions;

            const [text,sub] = texts;
            

            const textCanvas = makeTextSizeDiffCanvas(text,-4)
            const textWidth = width * 0.8;
            const textHeight = Math.min(textWidth / textCanvas.width * textCanvas.height * 1.8, height * 0.8);


            if(sub){
                let subCanvas = makeTextCanvas(sub,-space)
                let subHeight = height * 0.11;
                let subWidth = subHeight / subCanvas.height * subCanvas.width * 0.6;
            
                ctx.drawImage(
                    subCanvas,
                    (width - subWidth) / 2, height * 0.3,
                    subWidth,subHeight
                );
                ctx.drawImage(
                    textCanvas,
                    width * 0.1,height * 0.42,
                    textWidth, textHeight
                )
            }else{
                ctx.drawImage(
                    textCanvas,
                    width * 0.1, height * 0.1,
                    textWidth, textHeight
                )
            }

        }
    },

]