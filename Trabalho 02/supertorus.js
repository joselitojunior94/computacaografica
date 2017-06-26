function init() {
	var controls = new function() {
 		this.lados = 3.1;
 		this.s1 = 30;
 	};

 	var gui = new dat.GUI();
 	gui.add(controls, 'lados',3.1,13);
 	gui.add(controls, 's1',10,60);

	var scene = new THREE.Scene();
	
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	
	var renderer = new THREE.WebGLRenderer();
	
	renderer.setSize(window.innerWidth,window.innerHeight);

	i = 3;
	j = 0;
	f = 1;
	
	var geometry;//3 ate 20
	var	torus;

	camera.position.z = 500	;
	var s1 = 30;
	var render = function(){
		requestAnimationFrame(render);
		scene.remove(torus);
		
		s1 = controls.s1;
		
		//console.log(Math.round(controls.lados));
		if((Math.round(controls.lados) == 3) || (Math.round(controls.lados) == 12) ){
			a = 'red';
		}
		if((Math.round(controls.lados) == 6) || (Math.round(controls.lados) == 15)){
			a = 'blue';
		}
		if((Math.round(controls.lados) == 9) || (Math.round(controls.lados) == 20) ){
			a = 'green';
		}
		geometry = new THREE.TorusGeometry(200,s1,120,Math.round(i));
		material = new THREE.MeshNormalMaterial( {wireframe: true} );
		torus = new THREE.Mesh( geometry, material );
		scene.add( torus );

		if(i>controls.lados){
			i -=  0.04;
		}else{
			i +=  0.04;
		}	
		
		j += 0.005;
		f += -0.005;
	
		torus.rotateX(j);
		torus.rotateY(f);
		torus.rotateZ(j);

		renderer.render(scene, camera);
	};
	document.getElementById('WebGL-output').appendChild(renderer.domElement);
	render();
};