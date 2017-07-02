<?php

$erro = null;
$valido = false;
$data = strtotime('today midnight');

	if( isset($_REQUEST['validar']) && $_REQUEST['validar'] == true)
	{
		
		
		$prazo = strtotime($_POST['prazo']);
	
	
		if(strlen( utf8_decode($_POST["responsavel"]) ) < 3 )
		{
			$erro = $erro . "Nome deve ter mais de duas letras. <br>";
		}		
		if (strlen( utf8_decode($_POST["tarefa"]) ) < 5 )
		{
			$erro = $erro . "Tarefa deve ter mais de cinco letras. <br>";
		}
		if($prazo - $data < 0 )
		{
			$erro = $erro . "Data inválida <br>";
		}
		if($erro == null)
		{
			$valido = true;
		}	
	}
	
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Tarefas de Casa</title>
	<link rel="stylesheet" href="assets/css/bootstrap.css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css">
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<?php
	
		if($valido == true)
		{
			echo "<p> Tarefa adicionada com sucesso! </p>";	
			
				try
				{
					$connection = new PDO("mysql:host=localhost;dbname=tarefas", "root", 123456);
					$connection ->exec("set names utf8");
				}
				catch(PDOException $e)
				{
					echo "<p>Falha: " . $e -> getMessage() . "</p>";
					exit();
				}

				$sql = "INSERT INTO tarefas
						(tarefa, responsavel, prazo)
						VALUES(?, ?, ?)";

				$stmt = $connection -> prepare($sql);

				$stmt->bindParam(1, $_POST["tarefa"]);
				$stmt->bindParam(2, $_POST["responsavel"]);
				$stmt->bindParam(3, $_POST["prazo"]);


				$stmt-> execute();
	
		}
		else
		{
			if(isset($erro))
			{
				//echo "<p> Corrija os seguintes erros: ", $erro;
				
			} 				
		}
	
	?>
	
	<!-- Button trigger modal -->
		
				<!-- Modal Erros -->
				<div class='modal fade' id='modalErros' tabindex='-1' role='dialog' aria-labelledby='modalErrosLabel'>
				  <div class='modal-dialog' role='document'>
					<div class='modal-content'>
					  <div class='modal-header'>
						<button type='button' class='close fechar' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
						<h4 class='modal-title' id='modalErrosLabel'>Corrija os Erros</h4>
					  </div>
					  <div class='modal-body'>
					  	<?php
						  	if($valido != true){
								if(isset($erro)){
									echo "Corrija os seguintes erros: <br>" . $erro . " <br>";		
								}
							}
						?>
					  </div>
					  <div class='modal-footer'>
						<button type='button' class='btn btn-success' id="fechar">Fechar</button>
					  </div>
					</div>
				  </div>
				</div>
				

<?php	
//	if($stmt->errorCode() != "0000")
//	{
//		$valido = false;
//		$erro = "Erro código " . $stmt -> errorCode() . ": ";
//		$erro .= implode( ", ", $stmt->errorInfo());
//		echo $erro;
//	}
	
	?>
	<div class="container-fluid">
		<div class="row topo">
			<div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
				<h1>Tarefas de Casa</h1>
				<p>Insira as tarefas, os responsáveis e a data limite de entrega.</p>
			</div>
		</div> <!-- topo -->
		
		
		<div class="row adicionar">
			<div class="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1">
			
				<form action="?validar=true" method="POST" class="form-inline">
					<label for="tarefa">Tarefa:</label>
					<div class="input-group">
						<input type="text" class="form-control" name="tarefa" id="tarefa"
						
						<?php 
							   if( isset( $_POST["tarefa"]) ) {echo 'value="'. $_POST["tarefa"] . '"';} 	   
						?>
						>
					</div>
					<label for="responsavel">Responsável:</label>
					<div class="input-group">
						<input type="text" class="form-control" name="responsavel" id="responsavel"
						
						<?php
					
							   if( isset( $_POST["responsavel"]) ) {echo 'value="'. $_POST["responsavel"] . '"';} 
						?>
						>
					</div>
					<label for="prazo">Prazo:</label>
					<div class="input-group">
						<input type="date" class="form-control" name="prazo" id="prazo">
					</div>
					<div class="butoes">
						<button type="submit" class="btn btn-success">Inserir</button>
						<button type="reset" class="btn btn-danger">Resetar</button>
					</div>
				</form>	
			</div>
			
		
		</div> <!-- adicionar -->
		<div class="row tarefas">
	    
	    
		    <div class="col-xs-12 col-sm-6 fazer">
		       <div class="wrapper-panel">
		            <div class="panel panel-default">
						 <div class="panel-heading"> 
							<h2>Tarefas Por Fazer</h2>
						 </div>
						 <div class="panel-boding">
		                  <table class="table">
		                      <thead>
		                          <tr>
		                              <th>#</th>
		                              <th>Tarefa</th>
		                              <th>Responsável</th>
		                              <th>Prazo</th>
		                              <th>Concluir / Remover</th>
		                          </tr>
		                      </thead>
		                      <tbody>
		                     
   <?php
								  
		try
		{
			$conexao_tarefas = new PDO("mysql:host=localhost;dbname=tarefas", "root", 123456);
			$conexao_tarefas ->exec("set names utf8");
		}
		catch(PDOException $e)
		{
			echo "<p>Falha: " . $e -> getMessage() . "</p>";
			exit();
		}
				
		//delete task
		if( isset($_REQUEST["remover"]) && $_REQUEST["remover"] == true)
		{
			$stmt = $conexao_tarefas -> prepare("DELETE FROM tarefas WHERE id = ?");	
			$stmt-> bindParam(1, $_REQUEST["id"]);
			$stmt ->execute();
			
			//show error if  dont delete
			if($stmt->errorCode() != "0000")
			{
				$valido = false;
				$erro = "Erro código " . $stmt -> errorCode() . ": ";
				$erro .= implode( ", ", $stmt->errorInfo());
				echo $erro;
			}
		}
								  
		//change task
		
		  //alterar prazo								  
		   if( isset($_REQUEST["alterar"]) && $_REQUEST["alterar"] == true )
		   {
			   //$stmt = $conexao_tarefas -> prepare("UPDATE prazo FROM tarefas WHERE id = ? ");
			   $stmt = $conexao_tarefas -> prepare("UPDATE tarefas SET prazo = ? WHERE id = ? ");
			   $stmt -> bindParam(2, $_REQUEST["id"]);
			   $stmt -> bindParam(1, $_POST["change-date"]);
			   
			   $stmt->execute();
   
//			   if($stmt->errorCode() != "0000")
//				{
//					$valido = false;
//					$erro = "Erro código " . $stmt -> errorCode() . ": ";
//					$erro .= implode( ", ", $stmt->errorInfo());
//					echo $erro;
//				}

		   }
								  
		//list tasks
		
								  
		$rs = $conexao_tarefas->prepare("SELECT * FROM tarefas");
								  
      	//recupera id das tarefas e salva em $arrayId							  
		if($rs->execute())
		{
			$indice = 0;
			while($registro = $rs-> fetch(PDO::FETCH_OBJ))
			{
				$indice += 1;
				//echo $registro->id .'<br>';
				$arrayId[$indice] = $registro->id;
				
			}
			echo "			
				<!-- Modal Mudar Data -->
				<div class='modal fade' id='modalMudarData' tabindex='-1' role='dialog' aria-labelledby='modalMudarDataLabel'>
				  <div class='modal-dialog' role='document'>
					<div class='modal-content'>
					  <div class='modal-header'>
						<button type='button' class='close fechar-data' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
						<h4 class='modal-title' id='modalMudarDataLabel'>Alterar Prazo</h4>
					  </div>
					  <div class='modal-body'>
					  	<form action='?alterar=true&' method='POST'>
							<div class='alterar-data form-group'>
								<input type='date' name='change-date' id='change-date' class='form-control'>
							</div>
					  </div>
					  <div class='modal-footer'>
						<button type='button submit' class='btn btn-success' id='confirmar-data'><a>Alterar Data</a></button>
						<button type='button' class='btn btn-danger' id='fechar-data'><a>Cancelar</a></button>
					  </div>
					</div>
				  </div>
				</div>			
			";	
		}
			//$rs = $conexao_tarefas->prepare("SELECT * FROM tarefas");
			if($rs->execute())
			{
			$i = 0;
			while($registro = $rs-> fetch(PDO::FETCH_OBJ))
			{
				$i += 1;
				echo "<tr>";			
				echo "<td>". $i . "</td>";
				echo "<td>". $registro->tarefa . "</td>";
				echo "<td>". $registro->responsavel ."</td>";
				echo "<td class='data-prazo'>". date('m/d/Y', strtotime($registro->prazo)) ."</td>";
				echo "<td>	
                          <a href='?concluir=true&id=". $registro->id ."'><i class='fa fa-check-circle'></i></a>						  
                          <a href='?remover=true&id=". $registro->id ."'><i class='fa fa-times-circle'></i></a>
                          <a class='alterar' id='". $registro->id ."'><i class='fa fa-calendar'></i></a>						  
                      </td>";
				echo "</tr>";
				//. $registro->id .
			}
		}
		else
		{
			echo "Falha na seleção de tarefas";
		}
								  
 	     				
								  
  ?>
		                      </tbody>
		                  </table>
		              </div> <!--panel-boding -->
		            </div>
		       </div>
		    </div>
		    <div class="col-xs-12 col-sm-6 passadas">
		    	<div class="wrapper-panel">
		    		<div class="panel panel-default">
						<div class="panel-heading"> 
							<h2>Tarefas Concluídas</h2>
						</div>
						<div class="panel-boding">
							  <table class="table">
								  <thead>
									  <tr>
										  <th>#</th>
										  <th>Tarefa</th>
										  <th>Responsável</th>
										  <th>Conclusão</th>
										  <th>Reinserir / Apagar</th>
									  </tr>
								  </thead>
								  <tbody>

					<?php			
									  
						//delete completed task
									  
					   if( isset($_REQUEST["apagar"]) && $_REQUEST["apagar"] == true )
					   {
						   $stmt = $conexao_tarefas -> prepare("DELETE FROM tarefas_concluidas WHERE id = ? ");
						   $stmt -> bindParam(1, $_REQUEST["id"]);
						   $stmt->execute();
						   
					   }
						//reinserir completed task
					   if( isset($_REQUEST["reinserir"]) && $_REQUEST["reinserir"] == true )
					   {
						   $stmt = $conexao_tarefas -> prepare("INSERT INTO tarefas (tarefa, responsavel, prazo) SELECT tarefa, responsavel, prazo FROM tarefas_concluidas WHERE id = ? ");
						   $stmt -> bindParam(1, $_REQUEST["id"]);
						   $stmt->execute();
						   
					   }									  
						
						//list completed tasks
						$rs = $conexao_tarefas->prepare("SELECT * FROM tarefas_concluidas");
						if($rs->execute())
						{
							$i = 0;
							while($registro = $rs-> fetch(PDO::FETCH_OBJ))
							{
								$i += 1;
								echo "<tr>";			
								echo "<td>". $i . "</td>";
								echo "<td>". $registro->tarefa . "</td>";
								echo "<td>". $registro->responsavel ."</td>";
								echo "<td class='data-prazo'>". date('m/d/Y', strtotime($registro->prazo)) ."</td>";
								echo "<td>	
										  <a href='?reinserir=true&id=". $registro->id ."'><i class='fa fa-check-circle'></i></a>
										  <a href='?apagar=true&id=". $registro->id ."'><i class='fa fa-times-circle'></i></a>
									  </td>";
								echo "</tr>";
							}
						}
						else
						{
							echo "Falha na seleção de tarefas";
						}

					?>
								  </tbody>
							  </table>
						  </div> <!--panel-boding -->
					</div>
		    	</div>
		    </div>
		</div> <!-- tarefas -->
	</div>
	

	<script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	
	

	<?php
		if($valido != true){
			if(isset($erro)){
				echo "
				<script>
				
				$(document).ready( function(){
				
					$('#modalErros').addClass('in').css('display', 'block');
				
					$('.fechar, #fechar').click( function(){
						$('#modalErros').removeClass('in').css('display', 'none');
					});
					
				});
				
				</script>";		
			}
		}
	?>
	
	<script>
	    var objeto = <?php echo json_encode($arrayId); ?>;
		
		console.log(objeto);
		
		$(document).ready(function(){
			$('.alterar').click(function(){
				$('#modalMudarData').addClass('in').css('display', 'block');
				//pega a id da tarefa clicada
				var id = $(this).attr('id');
				//altera href do botao no modal para alterar data
				var link_alterar = '?alterar=true&id='+id;
				$('#confirmar-data > a').attr('href', link_alterar);
				//fecha modal alterar data
				$('.fechar-data, #fechar-data').click( function(){
					$('#modalMudarData').removeClass('in').css('display', 'none');
				});
				
				
			});
		});
	</script>
</body>
</html>