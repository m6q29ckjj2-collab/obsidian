```js
(
	()=> {
		var typePhing = () =>
			(theThing) => {
				var theDoThingList = []
				doProcessedAllDoThing = (
					(theRes) => {
						theDoThingList.forEach(
							(doThing)=>doThing(res)
						)
					}
				)
				theThingList.then(
				  doProcessedAllDoThing)
			}
				(doThing) => (
					theThing instanceof Promise
					? (doThing)=>
						theDoThingList.push(
						doThing)
					: (doThing)=>doThing(theThing)
				)
	}
	// Сдесь попробуем вызвать и посмотреть что 
	//получится
	var theJsonResult = typeThing(
		Promise.resolve(1)
	)
	
	theJsonResult(console.log)
	theJsonResult(console.log)
	theJsonResult(console.log)
	theJsonResult(console.log)
	theJsonResult(console.log)
	// Ответ будет 1
	// Ответ будет 1
	// Ответ будет 1
	// Ответ будет 1
	// Ответ будет 1
)
```