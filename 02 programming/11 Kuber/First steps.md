
1) brew install k3d
2) k3d version

## Gitlab
1) `k3d cluster create homelab \ --servers 1 \ --agents 2 \ -p "80:80@loadbalancer" \ -p "443:443@loadbalancer"`
> [!note] 
> Create a new k3s cluster with containerized nodes (k3s in docker). Every cluster will consist of one or more containers: - 1 (or more) server node container (k3s) - (optionally) 1 loadbalancer container as the entrypoint to the cluster (nginx) - (optionally) 1 (or more) agent node containers (k3s) 

### **`--servers 1`**
- Создает 1 **control-plane node** (главный узел/сервер)
- На этом узле работают компоненты управления Kubernetes:
    - kube-apiserver (API-сервер)
    - kube-scheduler (планировщик)
    - kube-controller-manager (контроллеры)
    - etcd (хранилище состояния)
### **`--agents 2`**
- Создает 2 **worker nodes** (рабочие узлы/агенты)
- На этих узлах будут запускаться ваши приложения (поды/контейнеры)
- По сути: 2 "виртуальные машины" для работы приложений

### **`-p "80:80@loadbalancer"`**
- **Проброс портов из хоста в кластер**
- `80:80` - порт 80 на вашей машине → порт 80 в кластере
- `@loadbalancer` - проброс идет на **k3d встроенный балансировщик нагрузки** (на самом деле это контейнер с nginx)    
- Это позволяет обращаться к ingress-контроллеру извне
![[Pasted image 20260208162402.png]]
2) Установка cert-manager (DEPRECATED)
	1) `kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.crds.yaml`
	2) `brew install helm`
	3) `helm repo add jetstack https://charts.jetstack.io`
	4) 
	
	



curl -sfL https://get.k3s.io | sh -
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

