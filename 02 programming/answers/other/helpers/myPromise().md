
```js
(
	()=> {
		var typePhing = () =>
			(theThing) => 
				(doThing) => (
					thePhing instanceof Promise
					? theThing.then(doThing)
					: doThing(theThing)
				)
	}
	// Сдесь попробуем вызвать и посмотреть что 
	//получится
	var theJsonResult = typeThing(
		Promise.resolve(1)
	)
	
	theJsonResult(console.log)
	// Ответ будет 1
)
```


