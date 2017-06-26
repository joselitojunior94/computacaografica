

function init() {
	var P1 = 2;
	var P2 = 1;
	var raioOrbitaPlaneta01 = 3;
	var raioOrbitaPlaneta02 = 2;
	document.getElementById("velocPlan01").value = P1;
	document.getElementById("velocPlan02").value = P2;
	document.getElementById("RaioPlan01").value = raioOrbitaPlaneta01;
	document.getElementById("RaioPlan02").value = raioOrbitaPlaneta02;
	var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(100,(window.innerWidth/window.innerHeight),0.01, 1000);
			if(raioOrbitaPlaneta01>raioOrbitaPlaneta02){
				camera.position.z = raioOrbitaPlaneta01;
			}else{
				camera.position.z = raioOrbitaPlaneta02;
			}
			
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);

			//Planeta 01
			var geometry = new THREE.CircleGeometry(raioOrbitaPlaneta01*0.05, 64 ),
				material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ),
				planeta01 = new THREE.Mesh( geometry, material );
			scene.add( planeta01 );
			
			//Planeta 02
			var geometry02 = new THREE.CircleGeometry(raioOrbitaPlaneta02*0.05, 64 ),
				material02 = new THREE.MeshBasicMaterial( { color: 0xff3333 } ),
				planeta02 = new THREE.Mesh( geometry02, material02 );
			scene.add( planeta02 );
			//Planeta 03
			var geometry03 = new THREE.CircleGeometry((raioOrbitaPlaneta01)*0.09, 64 ),
				material03 = new THREE.MeshBasicMaterial( { color: 0xffff1a } ),
				planeta03 = new THREE.Mesh( geometry03, material03 );
			scene.add( planeta03 );

			var  contAnosPlaneta01 = 0; 
			var contAnosPlaneta02 = 0;
			//P1 = document.getElementById("velocPlan01").value;
			//P2 = document.getElementById("velocPlan02").value;
			cont = 0;
			//Funcao para sempre renderizar e atualizar posicao dos planetas e das linhas
			planeta01.position.set(0,0,0.01);
			planeta02.position.set(0,0,0.01);
			planeta03.position.set(0,0,0.01);
			var render = function () {
				requestAnimationFrame(render);
				planeta03.position.set(0,0,0.1);

				document.getElementById("myBtn").addEventListener("click", function(){
					scene = new THREE.Scene();
					camera = new THREE.PerspectiveCamera(100,(window.innerWidth/window.innerHeight),0.01, 1000);

					/*scene.remove(line);
    				scene.remove(planeta01);
    				scene.remove(planeta02);
    				scene.remove(planeta03);*/

    				if((document.getElementById("velocPlan01").value)){
    					P1 = document.getElementById("velocPlan01").value;
    				}
    				if((document.getElementById("velocPlan02").value)){
    					P2 = document.getElementById("velocPlan02").value;
    				}
    				if((document.getElementById("RaioPlan01").value)){
    					raioOrbitaPlaneta01 = document.getElementById("RaioPlan01").value;
    				}
    				if((document.getElementById("RaioPlan02").value)){
    					
    					raioOrbitaPlaneta02 = document.getElementById("RaioPlan02").value;

    				}
    			
    				geometry = new THREE.CircleGeometry(raioOrbitaPlaneta01*0.05, 64 );
					material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
					planeta01 = new THREE.Mesh( geometry, material );
					scene.add(planeta01);
					geometry = new THREE.CircleGeometry(raioOrbitaPlaneta02*0.05, 64 );
					material = new THREE.MeshBasicMaterial( { color: 0xff3333  } );
					planeta02 = new THREE.Mesh( geometry, material );
					scene.add(planeta02);
					
					if(parseInt(raioOrbitaPlaneta01)>parseInt(raioOrbitaPlaneta02)){
						geometry = new THREE.CircleGeometry((raioOrbitaPlaneta01)*0.09, 64 );
						material = new THREE.MeshBasicMaterial( { color: 0xffff1a } );
						planeta03 = new THREE.Mesh( geometry, material );
						scene.add(planeta03);
						camera.position.z = raioOrbitaPlaneta01;
					}else{
						geometry = new THREE.CircleGeometry((raioOrbitaPlaneta02)*0.09, 64 );
						material = new THREE.MeshBasicMaterial( { color: 0xffff1a } );
						planeta03 = new THREE.Mesh( geometry, material );
						scene.add(planeta03);
						camera.position.z = raioOrbitaPlaneta02;
					}
				});
				//Velocidade de rotacao 
				contAnosPlaneta01 += P1*0.05;
				//console.log(contAnosPlaneta01);
				contAnosPlaneta02 += P2*0.05;
				//console.log(Math.floor(contAnosPlaneta01%2));
				planeta01.position.set( (Math.cos(contAnosPlaneta01) * raioOrbitaPlaneta01), 
										Math.sin(contAnosPlaneta01) * raioOrbitaPlaneta01, 
										0.1);
				planeta02.position.set( (Math.cos(contAnosPlaneta02) * raioOrbitaPlaneta02), 
										(Math.sin(contAnosPlaneta02) * raioOrbitaPlaneta02), 
										0.01);
				//Criacao de objeto linhas
				var geometrylines = new THREE.Geometry();
				//Calculo das linhas ponto a ponto utilizando a distancia entre dois pontos
				geometrylines.vertices.push(
								new THREE.Vector3((Math.cos(contAnosPlaneta01) * raioOrbitaPlaneta01), 
										(Math.sin(contAnosPlaneta01) * raioOrbitaPlaneta01), 
										0),
								new THREE.Vector3((Math.cos(contAnosPlaneta02) * raioOrbitaPlaneta02), 
										(Math.sin(contAnosPlaneta02) * raioOrbitaPlaneta02), 
										0)
				);

				if(((Math.cos(contAnosPlaneta01) * raioOrbitaPlaneta01) >0) && 
					((Math.sin(contAnosPlaneta01) * raioOrbitaPlaneta01)>0)){
						var material = new THREE.LineBasicMaterial({color:0x99ff99});		
				}
				if(((Math.cos(contAnosPlaneta01) * raioOrbitaPlaneta01) <0) && 
					((Math.sin(contAnosPlaneta01) * raioOrbitaPlaneta01)>0)){
						var material = new THREE.LineBasicMaterial({color:0x99ccff});
				}

				if(((Math.cos(contAnosPlaneta01) * raioOrbitaPlaneta01) >0) && 
					((Math.sin(contAnosPlaneta01) * raioOrbitaPlaneta01)<0)){
						var material = new THREE.LineBasicMaterial({color:0xff66ff});
				}

				if(((Math.cos(contAnosPlaneta01) * raioOrbitaPlaneta01) <0) && 
					((Math.sin(contAnosPlaneta01) * raioOrbitaPlaneta01)<0)){
						var material = new THREE.LineBasicMaterial({color:0xffcc66});
				}
				
				//Criando a geometria com material ou cor onde a linha esta no momento
				var line = new THREE.Line(geometrylines, material);
				scene.add(line);
				//renderizacao 
				renderer.render(scene, camera);
			};
			document.getElementById('WebGL-output').appendChild(renderer.domElement);
			render();
};