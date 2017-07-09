export  function LinkedList() {
            var Item = function (id) {
                this.id = id;
                this.age = 1;
                this.next = null;
            };
            var length = 0;
            var head = null;
            this.append = function (id) {
                var node = new Item(id),
                    current;
                if (head === null) {
                    head = node;
                } else {
                    current = head;
                    while (current.next) {
                        current = current.next;
                    }
                    current.next = node;
                }
                length++;
            };
            this.removeAt = function (position) {
                if (position > -1 && position < length){
                    var current = head,
                        previous,
                        index = 0;
                    //移除第一项
                    if(position === 0){
                        head =current.next;
                    } else {
                        while(index++ <position){
                            previous = current;
                            current =current.next;
                        }
                        //将previous与current的下一项连接起来：跳过current，从而移除它
                        previous.next =current.next;
                    }
                    length--;
                    return current.id;
                } else {
                    return null;
                }
            };
            this.insert = function(position ,id){
                if(position>=0 && position<=length){
                    var node = new Item(id),
                        current = head,
                        previous,
                        index = 0;
                    if(position === 0){ //在第一个位置添加
                        node.next = current;
                        head = node ;
                    } else {
                        while(index++<position){
                            previous = current;
                            current = current.next;
                        }
                        node.next = current;
                        previous.next = node;
                    }
                    length++;
                    return true;
                }else{
                    return false;
                }
            };
            this.toString = function(){
                var current = head,
                    string = '';
                while(current){
                    string += ',' + current.id;
                    current = current.next;
                }
                return string.slice(1);
            };
            this.getAllItem = function(){
                var current = head,
                    arr = [];
                while(current){
                    
                    arr.push(current)
                    current = current.next;
                }
                return arr;
            };
            this.removeFirstAgeTen = function(){
                var current = head,
                    arr = [];
                    var index = 1;
                while(current && index === 1){
                    if(current.age>10){
                        this.remove(current.id);
                        index = 0;
                    }
                    current = current.next;
                }
            };
            this.indexOf = function(id){
                var current = head,
                    index = 0;
                while(current){
                    if(id === current.id){
                        return index;
                    }
                    index++;
                    current = current.next;
                }
                return -1;
            };
            this.remove = function(id){
                var index = this.indexOf(id);
                return this.removeAt(index);
            };
            this.isEmpty = function(){
                return length === 0;
            };
            this.size = function(){
                return length;
            };
            this.gethead = function(){
                return head;
            }
        }

     