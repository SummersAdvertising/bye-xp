
 var data = {
 	groups: [
 		{	name: 'risk',
 			title: '不讓老闆乾著急、同事一團亂',
 			image: 'gp1-h3.png',
 			description: "Windows XP終止支援倒數計時中，別等到日期逼近才行動，認清風險儘早準備，升級Windows 7或Windows 8才能氣定神閒！",
 			questions: [
		 		{ 	content: "Windows XP已經進入產品生命週期末端，即將正式終止支援，請問代表了什麼含意？", 
		 			answers: [{ content: '市面上不再販售Windows XP'}, { content: '無法再透過微軟得到相關技術支援'}, { content: '不再釋出任何系統更新'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "A" },
		 			group: 'risk',
		 			image: 'gp1-h4-1.png'
		 		},
		 		{ 	content: "Windows XP正式終止支援日期是哪一天？" ,
			 		answers: [{ content: '2013年12月25日'}, { content: '2014年1月1日'}, { content: '2014年4月8日', currect: true}, { content: '2020年4月8日'}],
		 			actor: { name: "B" },
		 			group: 'risk',
		 			image: 'gp1-h4-2.png'
		 		},
		 		{ 	content: "終止支援後，如果繼續使用Windows XP將會面臨什麼風險？",
			 		answers: [{ content: '軟體不相容'}, { content: '週邊裝置、硬體不支援'}, { content: '不再有相關系統更新，資安漏洞大'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "C" },
		 			group: 'risk',
		 			image: 'gp1-h4-3.png'
		 		}
		 	]
	 	},
	 	{
		 	name: 'advance',
 			title: '強大新功能，拯救無精打采辦公室',
 			image: 'gp2-h3.png',
 			description: "全新Windows 7與Windows 8視覺感受大提升，個人化設定及小工具展現個人風格，行動力、生產力全速進化，打造所有同事讚不絕口的行動辦公室。",
		 	questions: [
		 		{ 	content: "升級最新Windows 7/8 系統，如何打造出最佳個人化的專屬電腦？",
			 		answers: [{ content: '提供各種佈景主題、個人化設定'}, { content: '桌面小工具，好用又方便'}, { content: '聰明更新，不必再煩惱驅動程式'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "D" },
		 			group: 'advance',
		 			image: 'gp2-h4-1.png'
		 		},
		 		{ 	content: "升級Windows 7/8，可以擁有哪一種更強大的內建功能？",
			 		answers: [{ content: '剪取工具'}, { content: '問題步驟收錄程式'}, { content: '回復、備份建立系統映像'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "E" },
		 			group: 'advance',
		 			image: 'gp2-h4-2.png'
		 		},
		 		{ 	content: "升級Windows 7/8，可以享受哪一種更高效益的行動力？",
			 		answers: [{ content: '多種裝置（平板、變形筆電）一次滿足'}, { content: '輕薄短小，輕裝上路'}, { content: '續航力佳，不再是3分鐘熱度'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "F" },
		 			group: 'advance',
		 			image: 'gp2-h4-3.png'
		 		},
		 		{ 	content: "升級Windows 7/8，可以創造哪一種更驚豔的生產力？",
			 		answers: [{ content: '8秒就開機，風馳電掣'}, { content: '電腦、平板都能使用原有桌面應用程式'}, { content: '穩定、相容性高'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "G" },
		 			group: 'advance',
		 			image: 'gp2-h4-4.png'
		 		}
		 	]
	 	},
	 	{	name: 'upgrade',
 			title: '別再擔心窮緊張，部署升級超輕鬆',
 			image: 'gp3-h3.png',
 			description: "升級令人期待，但你可以不必怕受傷害，詳細工具步驟已經為你準備好，快從底下的問題裡，找出你在部署工作中不可或缺的神兵利器。",
	 		questions: [
	 			{ 	content: "計劃升級Windows 7/8，應協助公司該從哪一步驟開始？",
			 		answers: [{ content: '企業內部軟、硬體資產盤點', currect: true}, { content: '選擇適合授權、系統版本'}, { content: '規劃部署策略'}, { content: '使用微軟免費部署工具'}],
		 			actor: { name: "H" },
		 			group: 'upgrade',
		 			image: 'gp3-h4-1.png'
		 		},
		 		{ 	content: "升級部署前，有什麼好工具可以幫助你？",
			 		answers: [{ content: 'Microsoft Assessment and Planning Toolkit (MAP)資產盤點工具'}, { content: 'Application Compatibility Toolkit (ACT)相容性測試工具與User State Migration Tool (USMT)使用者狀態移轉工具'}, { content: 'Microsoft Deployment Toolkit (MDT)大量部署工具及Windows AIK / Windows ADK 自動化部署套件'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "I" },
		 			group: 'upgrade',
		 			image: 'gp3-h4-2.png'
		 		},
		 		{ 	content: "請依序排出部署流程順序：<br><br>A.	安裝數台參考電腦 Windows 7/8<br>B.	將通過相容性測試的企業內部應用程式，安裝於參考電腦<br>C.	擷取參考電腦上的 Windows7/8系統映像檔<br>D.	決定部署方式，調整自動化部署程度<br>E.	 使用網路、USB隨身碟、光碟媒體部署	",
		 			nested: "A.	安裝數台參考電腦 Windows 7/8<br>B.	將通過相容性測試的企業內部應用程式，安裝於參考電腦<br>C.	擷取參考電腦上的 Windows7/8系統映像檔<br>D.	決定部署方式，調整自動化部署程度<br>E.	 使用網路、USB隨身碟、光碟媒體部署",
			 		answers: [{ content: 'A, B, C, D, E', currect: true}, { content: 'A, C, E, B, D'}, { content: 'B, C, A, E, D'}, { content: 'E, D, C, B, A'}],
		 			actor: { name: "J" },
		 			group: 'upgrade',
		 			image: 'gp3-h4-3.png'
		 		},
		 		{ 	content: "部署Windows 7/8時，必備哪一種工具？",
			 		answers: [{ content: 'Windows PE'}, { content: 'Sysprep.exe'}, { content: 'ImageX.exe與MDT/WDS'}, { content: '以上皆是', currect: true}],
		 			actor: { name: "K" },
		 			group: 'upgrade',
		 			image: 'gp3-h4-4.png'
		 		}
	 		]
	 	}, 
	 	{	name: 'feature',
 			title: '掌握Windows 8.1優勢，隨時驚豔全場',
 			image: 'gp4-h3.png',
 			description: "在Windows 8.1絕佳的系統效能下，增強使用者體驗、企業控管功能、續航力，讓行動辦公室體驗精彩可期，公司上下對你投以英雄崇拜目光。",
	 		questions: [	 		
		 		{ 	content: "關於Windows 8.1 「快速」這項特色，下列哪一個描述不符合？",
			 		answers: [{ content: '超快速開關機及開啟傳統應用程式'}, { content: '情境功能表，快速尋找所需功能'}, { content: '開始按鈕回來了，選擇你所熟悉操作方式'}, { content: '沒有觸控就不好用', currect: true}],
		 			actor: { name: "L" },
		 			group: 'feature',
		 			image: 'gp4-h4-1.png'
		 		},
		 		{ 	content: "關於Windows 8.1 「行動力」這項特色，下列哪一個描述不符合？",
			 		answers: [{ content: '多樣化的行動裝置，搭配第四代Intel CPU續航力更強、穩定性更好'}, { content: 'Enterprise Side-loading應用程式企業側載'}, { content: '可攜式的工作環境-Windows To Go'}, { content: '只有桌上型電腦、筆電適合搭載Windows 8.1', currect: true}],
		 			actor: { name: "M" },
		 			group: 'feature',
		 			image: 'gp4-h4-2.png'
		 		},
		 		{ 	content: "關於Windows 8.1 「安全性」這項特色，下列哪一個描述不符合？",
			 		answers: [{ content: '內建Windows Defender防毒軟體'}, { content: 'Bitlocker資安防護滴水不漏'}, { content: 'SmartScreen自動隔絕惡意網站'}, { content: 'Do Not Track保護IE瀏覽紀錄不被追蹤'}, { content: '從電源開啟的那一刻隨時會遭受惡意程式攻擊', currect: true}],
		 			actor: { name: "N" },
		 			group: 'feature',
		 			image: 'gp4-h4-3.png'
		 		},
		 		{ 	content: "關於Windows 8.1 「前後端整合」這項特色，下列哪一個描述不符合？",
			 		answers: [{ content: 'Start Screen Control統一化企業內使用者界面，維持一致性，IT控管更方便'}, { content: 'Assigned Access指定存取，使用者只能存取單一應用程式，輕鬆管理末端裝置'}, { content: 'Workplace join加入工作群組，實現BYOD的幫手，讓無法加入網域裝置存取公司內部資源'}, { content: 'Windows 8.1是套全新作業系統必須購買才能升級', currect: true}],
		 			actor: { name: "O" },
		 			group: 'feature',
		 			image: 'gp4-h4-4.png'
		 		}
	 		]
 		}
 	],
 	actors: [
 		{ name: "A", image: "/images/game/gp1-p1.png", hail: "/images/game/gp1-p1h.png" },
 		{ name: "B", image: "/images/game/gp1-p2.png", hail: "/images/game/gp1-p2h.png" },
 		{ name: "C", image: "/images/game/gp1-p3.png", hail: "/images/game/gp1-p3h.png" },
 		{ name: "D", image: "/images/game/gp2-p1.png", hail: "/images/game/gp2-p1h.png" },
 		{ name: "E", image: "/images/game/gp2-p2.png", hail: "/images/game/gp2-p2h.png" },
 		{ name: "F", image: "/images/game/gp2-p3.png", hail: "/images/game/gp2-p3h.png" },
 		{ name: "G", image: "/images/game/gp2-p4.png", hail: "/images/game/gp2-p4h.png" },
 		{ name: "H", image: "/images/game/gp3-p1.png", hail: "/images/game/gp3-p1h.png" },
 		{ name: "I", image: "/images/game/gp3-p2.png", hail: "/images/game/gp3-p2h.png" },
 		{ name: "J", image: "/images/game/gp3-p3.png", hail: "/images/game/gp3-p3h.png" },
 		{ name: "K", image: "/images/game/gp3-p4.png", hail: "/images/game/gp3-p4h.png" },
 		{ name: "L", image: "/images/game/gp4-p1.png", hail: "/images/game/gp4-p1h.png" },
 		{ name: "M", image: "/images/game/gp4-p2.png", hail: "/images/game/gp4-p2h.png" },
 		{ name: "N", image: "/images/game/gp4-p3.png", hail: "/images/game/gp4-p3h.png" },
 		{ name: "O", image: "/images/game/gp4-p4.png", hail: "/images/game/gp4-p4h.png" }
 	]
 	
 };