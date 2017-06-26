function init() {

	var controls = new function(){	
		this.dist = 15;
		this.n = 4.7;
	}

	var gui = new dat.GUI();

 	gui.add(controls, 'dist',1,15);
 	gui.add(controls, 'n',-15,40);

	var scene = new THREE.Scene();
	
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	
	var renderer = new THREE.WebGLRenderer();

	
	renderer.setSize(window.innerWidth,window.innerHeight);

	var n1 = 30;
	var n2 = 10;
	var r1 = 10;
	var r2 = 10;
	var r3 = 10;

	var geometry ;
	var material ;
	var sphere ;
	
	var mesh, a;

	camera.position.z = 50;
	i = 3;
	j = 0;
	f = 1;
	var render = function(){
		requestAnimationFrame(render);
		scene.remove(sphere);
		p1 = controls.dist;
		p2 = controls.n;
		p4 = controls.p04;

		if((Math.round(p2) == 3) || (Math.round(p2) == 12) ){
			a = 'red';
		}
		if((Math.round(p2) == 6) || (Math.round(p2) == 15)){
			a = 'blue';
		}
		if((Math.round(p2) == 9) || (Math.round(p2) == 20) ){
			a = 'green';
		}

		geometry = new THREE.SphereGeometry( p1, p2, 100, p4);
		material = new THREE.MeshNormalMaterial( {color: a, wireframe: true} );
		sphere = new THREE.Mesh( geometry, material );
		scene.add( sphere );
		
		j += 0.005;
		f += -0.005;
		sphere.rotateX(j);
		sphere.rotateY(j);
		sphere.rotateZ(f);
			
		renderer.render(scene, camera);

	}
	document.getElementById('WebGL-output').appendChild(renderer.domElement);
	render();
};