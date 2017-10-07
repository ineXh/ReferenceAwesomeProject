var Count = 0;
var Engine = (function(global) {
    document.addEventListener('DOMContentLoaded', function() {

        window.scrollTo(0,1);
        document.body.style.overflow = 'hidden';

        startTime = Date.now();
        writeParagraph('How are you?')
        console.log('Before Send test')
        var sendMsg = function(){
            webViewBridge.send(
                'sayHi',
                {mydata: 'test data'}, 
                function(){
                    writeParagraph('success')
                    console.log('success')
                },
                function(){console.log('error')});
        }
        createButton(sendMsg);
        animate();
    }); // end DOMContentLoaded
    function update(){
    	Count++;
    }
    function animate() {
        update();
        //app.renderer.render(stage0);
        requestAnimationFrame(animate);
    } // end animate
})(this);

function writeParagraph(string){
	var para = document.createElement('p');
	para.appendChild(document.createTextNode(string));
	document.body.appendChild(para);
    //document.body.insertBefore(para, document.body.firstChild);
}

function createButton(cb){
    var button = document.createElement("button");
    button.innerHTML = "Do Something";
    document.body.appendChild(button);
    button.addEventListener ("click", cb);
}