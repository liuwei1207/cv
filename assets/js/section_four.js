/**
 * Created by Liuwei on 2016/11/22.
 */

//wordCloud
$(document).ready(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('word-cloud'));


    var option = {
        tooltip: {},
        series: [{
            type: 'wordCloud',
            gridSize: 40,
            sizeRange: [20, 60],
            rotationRange: [0, 0],
            shape: 'circle',
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [{
                name: '吃吃吃',
                value: 10000,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '篮球',
                value: 6181,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '阅读技术类书刊杂志博客',
                value: 4386,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '折腾轮子',
                value: 4055,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '玩电视游戏:【Halo】',
                value: 585,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '玩电脑游戏大作:【Call of Duty】',
                value: 2244,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '网球',
                value: 1898,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '热爱coding',
                value: 1484,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '听音乐',
                value: 1112,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '看大熊猫直播',
                value: 965,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '阅读历史类书籍',
                value: 847,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '喜欢收集页面特效',
                value: 2467,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '玩电脑游戏大作:【Battlefield】',
                value: 555,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '玩电脑游戏大作:【Counter-Strike-Go】',
                value: 550,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '玩竞技类游戏:【League of Legends】',
                value: 462,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '喜欢任何带抹茶口味的东西',
                value: 366,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '火锅',
                value: 360,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '烤肉',
                value: 282,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '玩桌游:【谁是卧底】',
                value: 273,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }, {
                name: '看电影',
                value: 265,
                textStyle: {
                    normal: {
                        color: '#fff'
                    },
                    emphasis: {
                        color: '#0084b4'
                    }
                }
            }]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})